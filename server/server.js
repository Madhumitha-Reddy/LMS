import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// initialize express
const app = express()

// MiddleWares
app.use(cors())
app.use(express.json())

// Connect to database (for Vercel serverless)
let isConnected = false
const connectToDB = async () => {
  if (!isConnected) {
    try {
      await connectDB()
      isConnected = true
      console.log('Database connected successfully')
    } catch (error) {
      console.error('Database connection failed:', error)
      throw error
    }
  }
}

// Routes
app.get('/', async (req, res) => {
  try {
    await connectToDB()
    res.send("🚀 API Working - Database Connected!")
  } catch (error) {
    res.send("❌ API Working - Database Connection Failed")
  }
})

app.get('/health', async (req, res) => {
  try {
    await connectToDB()
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      message: 'Server and Database running successfully',
      database: 'Connected'
    })
  } catch (error) {
    res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      message: 'Server running but database connection failed',
      database: 'Disconnected',
      error: error.message
    })
  }
})

app.get('/test', (req, res) => {
  res.json({
    message: "Test endpoint working!",
    environment: process.env.NODE_ENV || 'development',
    time: new Date().toISOString(),
    hasMongoURI: !!process.env.MONGODB_URI,
    allEnvVars: Object.keys(process.env).filter(key => key.includes('MONGO') || key.includes('CLERK'))
  })
})

app.post('/clerk', async (req, res) => {
  try {
    await connectToDB()
    clerkWebhooks(req, res)
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' })
  }
})

// For local development - start server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5001
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`)
  })
}

// Export app for Vercel
export default app
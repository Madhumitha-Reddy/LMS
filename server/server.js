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
      console.log('Database connected')
    } catch (error) {
      console.error('Database connection failed:', error)
    }
  }
}

// Routes
app.get('/', async (req, res) => {
  try {
    await connectToDB()
    res.send("API Working - Database Connected")
  } catch (error) {
    res.send("API Working - Database Connection Failed")
  }
})

app.post('/clerk', async (req, res) => {
  try {
    await connectToDB()
    clerkWebhooks(req, res)
  } catch (error) {
    res.status(500).json({ error: 'Database connection failed' })
  }
})

// Export app for Vercel
export default app
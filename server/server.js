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

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', clerkWebhooks)

// Connect to database and start server
const startServer = async () => {
  try {
    await connectDB()
    
    const PORT = process.env.PORT || 5001
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

// Start the server
startServer()

// Export app for Vercel
export default app
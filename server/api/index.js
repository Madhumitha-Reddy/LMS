import express from 'express'
import cors from 'cors'

const app = express()

// MiddleWares
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send("API Working - Simple Version")
})

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Export app for Vercel
export default app

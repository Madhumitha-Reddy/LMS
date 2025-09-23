import express from 'express'
import cors from 'cors'

// initialize express
const app = express()

// MiddleWares
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send("🚀 API Working - No Database Required!")
})

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    message: 'Server is running successfully'
  })
})

app.get('/test', (req, res) => {
  res.json({
    message: "Test endpoint working!",
    environment: process.env.NODE_ENV || 'development',
    time: new Date().toISOString()
  })
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
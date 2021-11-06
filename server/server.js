import express from 'express'
import connectDB from './config/db.js'
const PORT = 5000

connectDB()
const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Hello all!'))

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
)

import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import connectDB from './db/connectDB.js'

const app = express()

import router from './routes/authRoute.js'

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || process.env.API_PORT
const server = http.createServer(app)

app.use('/api/auth/', router)

// --------------------------------------------------------------------------------
// initailaize app with db connect
// --------------------------------------------------------------------------------
const start = async () => {
  try {
    await connectDB(
      process.env.MONGO_URI.replace(
        '<password>',
        process.env.MONGO_URI_PASSWORD
      )
    )
    app.listen(PORT, () => {
      console.log(`Hi from port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()

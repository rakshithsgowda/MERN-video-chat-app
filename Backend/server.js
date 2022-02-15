import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './db/connectDB.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || process.env.API_PORT

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

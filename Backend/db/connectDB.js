import mongoose from 'mongoose'

const connectDB = (url) => {
  console.log('db connection')
  return mongoose.connect(url)
}

export default connectDB

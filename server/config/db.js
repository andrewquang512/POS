import mongoose from 'mongoose'

const MONGO_URL =
  'mongodb+srv://vi123:BQH3rijyjtXEPq9T@cluster0.cb3mx.mongodb.net/proshop?retryWrites=true&w=majority'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    // ? .red.underline.bold , .cyan.underline are from colors package
    process.exit(1)
  }
}

export default connectDB

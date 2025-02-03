import mongoose from 'mongoose'
let initialized = false
export const connect = async () => {
  if (initialized) {
    console.log('MongoDB already connected')
    return
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'next-imdb-clerk',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    intialized = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log('MongoDB connection error', error)
  }
}

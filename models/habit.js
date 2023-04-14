const mongoose = require('mongoose')

//const url = process.env.MONGODB_URI

const url =
  `mongodb+srv://fullstack:${password}@cluster0.v3fogtb.mongodb.net/habittracker?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

console.log('connecting to', url)
mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })


const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true
    },
    targetFrequency: {
        type: Number,
        required: true
    },
    comments: {
        type: String
    }
})

habitSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Habit', habitSchema)
const mongoose = require('mongoose')

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
    currentStreak: {
        type: Number,
        required: true
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
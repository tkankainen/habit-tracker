const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    habitID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habit',
        required: true
    },
    comments: {
        type: String
    }
})

logSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Log', logSchema)
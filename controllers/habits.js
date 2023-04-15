const habitRouter = require('express').Router()
const Habit = require('../models/habit')

habitRouter.get('/', (request, response) => {
    Habit.find({}).then(habits => {
        response.json(habits)
    })
})
  
habitRouter.post('/', (request, response) => {
    const body = request.body

    if (body.name === undefined) {
        return response.status(400).json({ error: 'content missing' })
    }

    const habit = new Habit({
        name: body.name,
        targetFrequency: body.targetFrequency,
        currentStreak: body.currentStreak
    })

    habit.save().then(savedHabit => {
        response.json(savedHabit)
    })
    .catch(error => next(error))
})

module.exports = habitRouter
  
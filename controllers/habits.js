const habitRouter = require('express').Router()
const Habit = require('../models/habit')

habitRouter.get('/', (request, response) => {
    Habit.find({}).then(habits => {
        response.json(habits)
    })
})

habitRouter.get('/:id', (request, response, next) => {
    Habit.findById(request.params.id)
      .then(habit => {
        if (habit) {
          response.json(habit)
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
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

habitRouter.delete('/:id', (request, response, next) => {
    Habit.findByIdAndRemove(request.params.id)
      .then(() => {
        response.status(204).end()
      })
      .catch(error => next(error))
})
  
habitRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const habit = {
        name: body.name,
        targetFrequency: body.targetFrequency,
        currentStreak: body.currentStreak
    }

    Habit.findByIdAndUpdate(request.params.id, habit, { new: true })
        .then(updatedHabit => {
        response.json(updatedHabit)
        })
        .catch(error => next(error))
})

module.exports = habitRouter
  
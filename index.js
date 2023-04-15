const express = require('express')
const app = express()
//const cors = require('cors')
//require('dotenv').config()

const Habit = require('./models/habit')

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.json())
app.use(requestLogger)
//app.use(express.static('build'))

app.get('/api/habits', (request, response) => {
  Habit.find({}).then(habits => {
      response.json(habits)
  })
})

app.post('/api/habits', (request, response) => {
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


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
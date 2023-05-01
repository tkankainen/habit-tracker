const logRouter = require('express').Router()
const Log = require('../models/log')
const Habit = require('../models/habit')

logRouter.get('/', (request, response) => {
    Log.find({}).then(logs => {
        response.json(logs)
    })
})

logRouter.post('/', async (request, response) => {
    const body = request.body

    if (body.date === undefined) {
        return response.status(400).json({ error: 'date missing' })
    }

    const log = new Log({
        date: body.date,
        habitID: body.habitID,
        comments: body.comments
    })

    try {
        await log.save();
    
        //update habit's currentStreak
        const habit = await Habit.findByIdAndUpdate(
          body.habitID,
          {
            $inc: { currentStreak: 1 }
          },
          { new: true } // return the updated habit object
        );
    
        response.json({ log, habit });
      } catch (error) {
        response.status(500).json({ error: error.message });
      }
})

logRouter.delete('/:id', (request, response, next) => {
    Log.findByIdAndRemove(request.params.id)
      .then(() => {
        response.status(204).end()
      })
      .catch(error => next(error))
})

module.exports = logRouter
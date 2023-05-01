const logRouter = require('express').Router()
const Log = require('../models/log')

logRouter.get('/', (request, response) => {
    Log.find({}).then(logs => {
        response.json(logs)
    })
})

logRouter.post('/', (request, response) => {
    const body = request.body

    if (body.date === undefined) {
        return response.status(400).json({ error: 'date missing' })
    }

    const log = new Log({
        date: body.date,
        habit: body.habit,
        comments: body.comments
    })

    log.save().then(savedLog => {
        response.json(savedLog)
    })
    .catch(error => next(error))
})

module.exports = logRouter
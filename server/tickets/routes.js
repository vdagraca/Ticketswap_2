const { Router } = require('express')
const Event = require('./model')
// const auth = require('../auth/middleware')

const router = new Router()

router.post('/events', (req, res, next) => {
    Event
        .create(req.body)
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: `event does not exist`
                })
            }
            return res.status(201).send(event)
        })
        .catch(error => next(error))
})

router.get('/events', (req, res, next) => {
    Event
        .findAll()
        .then(events => {
            res.json({ events: events })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong',
                error: err
            })
        })
})

router.get('/events/:id', (req, res, next) => {
    Event
        .findByPk(req.params.id
            // , { include: [Song] }
        )
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: `Event does not exist`
                })
            }
            return res.send(event)
        })
        .catch(error => next(error))
})


module.exports = router
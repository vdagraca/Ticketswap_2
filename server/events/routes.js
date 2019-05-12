const { Router } = require('express')
const Event = require('./model')
const Ticket = require('../tickets/model')
const User = require('../users/model')
const ticketFraude = require('../logic')

const auth = require('../auth/middleware')

const router = new Router()

router.post('/events', auth, (req, res, next) => {
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
    const limit = 9
    const offset = req.query.offset || 0

    Promise.all([
        Event.count(),
        Event.findAll({ limit, offset })
    ])
        .then(([total, events]) => {
            res.send({
                events, total
            })
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
        .findByPk(req.params.id, { include: [Ticket, User] }
        )
        .then(event => {
            if (!event) {
                return res.status(404).send({
                    message: `Event does not exist`
                })
            }
            // event.getTickets().then(tickets => {
            //     const fraude2 = ticketFraude(null, tickets)

            //     ticketFraude(null, tickets)
            return res.send(event)
            // })

        })
        .catch(error => next(error))
})


module.exports = router
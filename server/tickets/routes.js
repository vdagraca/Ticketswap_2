const { Router } = require('express')
const Ticket = require('./model')
const Event = require('../events/model')
const User = require('../users/model')
// const auth = require('../auth/middleware')

const router = new Router()

router.post('/events/:id/tickets', (req, res, next) => {
    Ticket
        .create(req.body)
        .then(ticket => {
            if (!ticket) {
                return res.status(404).send({
                    message: `ticket does not exist`
                })
            }
            return res.status(201).send(ticket)
        })
        .catch(error => next(error))
})

router.get('/events/:id/tickets', (req, res, next) => {
    Ticket
        .findAll(
            // { include: [User] }
        )
        .then(tickets => {
            res.json({ tickets: tickets })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong',
                error: err
            })
        })
})

router.get('/events/:id/tickets/:id', (req, res, next) => {
    Ticket
        .findByPk(req.params.id,
            { include: [User] }
        )
        .then(ticket => {
            if (!ticket) {
                return res.status(404).send({
                    message: `Event does not exist`
                })
            }
            return res.send(ticket)
        })
        .catch(error => next(error))
})

router.put('/events/:id/tickets/:id', (req, res, next) => {
    Ticket
        .findByPk(req.params.id)
        .then(ticket => {
            if (!ticket) {
                return res.status(404).send({
                    message: `Ticket does not exist`
                })
            }
            return ticket.update(req.body)
                .then(ticket => res.send(ticket))
        })
        .catch(error => next(error))
})



module.exports = router
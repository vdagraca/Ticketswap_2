const { Router } = require('express')
const Ticket = require('./model')
const User = require('../users/model')
const Comment = require('../comments/model')
const auth = require('../auth/middleware')
const ticketFraude = require('../logic')

const router = new Router()

router.post('/events/:id', auth, (req, res, next) => {
    Ticket
        .create(req.body)
        .then(ticket => {
            console.log('userId', ticket.userId)
            if (!ticket) {
                return res.status(404).send({
                    message: `ticket does not exist`
                })
            }
            return res.status(201).send(ticket)
        })
        .catch(error => next(error))
})


router.get('/events/:eventid/tickets/:id', (req, res, next) => {
    Ticket
        .findByPk(req.params.id,
            { include: [User, Comment] }
        )
        .then(ticket => {

            if (!ticket) {
                return res.status(404).send({
                    message: `Ticket does not exist`
                })
            }

            Ticket.findAll().then(tickets => {
                const fraude = ticketFraude(ticket, tickets)

                return res.send({
                    fraude,
                    ticket
                })
            })
                .catch(error => next(error))
        })
})

router.put('/events/:eventid/tickets/:id', auth, (req, res, next) => {
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
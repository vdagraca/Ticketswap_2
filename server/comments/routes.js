const { Router } = require('express')
const Comment = require('./model')
// const Event = require('../events/model')
const User = require('../users/model')
// const auth = require('../auth/middleware')

const router = new Router()

router.post('/events/:id/tickets/:id', (req, res, next) => {
    Comment
        .create(req.body)
        .then(comment => {
            if (!comment) {
                return res.status(404).send({
                    message: `comment does not exist`
                })
            }
            return res.status(201).send(comment)
        })
        .catch(error => next(error))
})

router.get('/events/:id/tickets/:id/comments', (req, res, next) => {
    Comment
        .findAll(
            { include: [User] }
        )
        .then(comments => {
            res.json({ comments: comments })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong',
                error: err
            })
        })
})



module.exports = router
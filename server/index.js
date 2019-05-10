const express = require('express')
const bodyParser = require('body-parser')
const eventsRouter = require('./events/routes')
const ticketsRouter = require('./tickets/routes')
const commentsRouter = require('./comments/routes')
const userRouter = require('./users/routes')
const authenticationRouter = require('./auth/routes')
const cors = require("cors");

const app = express()

const port = process.env.PORT || 4001


app
    .use(cors())
    .use(bodyParser.json())
    .use(eventsRouter)
    .use(ticketsRouter)
    .use(commentsRouter)
    .use(userRouter)
    .use(authenticationRouter)
    .listen(port, () => console.log(`Listening on port ${port}`))

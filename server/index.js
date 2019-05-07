const express = require('express')
const bodyParser = require('body-parser')
const eventsRouter = require('./events/routes')
const ticketsRouter = require('./tickets/routes')
const commentsRouter = require('./comments/routes')
const userRouter = require('./users/routes')
const cors = require("cors");

const app = express()

const port = process.env.PORT || 4000


app
    .use(cors())
    .use(bodyParser.json())
    .use(eventsRouter)
    .use(ticketsRouter)
    .use(commentsRouter)
    .use(userRouter)
    .listen(port, () => console.log(`Listening on port ${port}`))

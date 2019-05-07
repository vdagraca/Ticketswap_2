const express = require('express')
const bodyParser = require('body-parser')
const eventsRouter = require('./events/routes')
const app = express()
const port = process.env.PORT || 4000

app
    .use(bodyParser.json())
    .use(eventsRouter)
    .listen(port, () => console.log(`Listening on port ${port}`))

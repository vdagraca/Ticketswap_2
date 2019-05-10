const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET || '9u8nnjksfdt98*(&*%T$#hsfjk'

function toJWT(data) {
    return jwt.sign(data, secret, { expiresIn: '2h' })
}

function toData(token) {
    console.log('todata')
    return jwt.verify(token, secret)
}

module.exports = { toJWT, toData }
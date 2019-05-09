const User = require('../users/model')
const { toData } = require('./jwt')

function auth(req, res, next) {
    const auth = req.headers.authorization && req.headers.authorization.split(' ')
    console.log('auth', auth)
    if (auth && auth[0] === 'Bearer' && auth[1]) {
        try {
            console.log('token', auth[1])
            const data = toData(auth[1])
            console.log('data', data)
            User
                .findByPk(data.userId)
                .then(user => {
                    if (!user) return next('User does not exist')

                    req.user = user
                    next()
                })
                .catch(next)
        }
        catch (error) {
            res.status(400).send({
                message: `Error ${error.name}: ${error.message}`,
            })
        }
    }
    else {
        res.status(404).send({
            message: 'Resource does not exist or user is not authenticated'
        })
    }
}

module.exports = auth
const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING,
        field: 'firstName',
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'lastName',
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        field: 'password',
        allowNull: false
    }
}, {
        timestamps: false,
        tableName: 'users'
    })


module.exports = User


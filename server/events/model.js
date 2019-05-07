const Sequelize = require('sequelize')
const sequelize = require('../db')
const Ticket = require('../tickets/model')
const User = require('../users/model')

const Event = sequelize.define('events'
    , {
        name: {
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            field: 'description',
            allowNull: false
        },
        picture: {
            type: Sequelize.STRING,
            field: 'picture',
            allowNull: false
        },
        startdate: {
            type: Sequelize.STRING,
            field: 'startdate',
            allowNull: false
        },
        enddate: {
            type: Sequelize.STRING,
            field: 'enddate',
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'events'
    }
)
Event.hasMany(Ticket)
Event.belongsTo(User)

module.exports = Event
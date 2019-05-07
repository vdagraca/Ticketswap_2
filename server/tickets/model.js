const Sequelize = require('sequelize')
const sequelize = require('../db')


const Ticket = sequelize.define('tickets'
    , {
        author: {
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
        event: {
            type: Sequelize.STRING,
            field: 'startdate',
            allowNull: false
        },
        price: {
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

module.exports = Event
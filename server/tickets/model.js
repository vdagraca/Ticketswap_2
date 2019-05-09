const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../users/model')
const Comment = require('../comments/model')
const Ticket = sequelize.define('tickets'
    , {
        userId: {
            type: Sequelize.INTEGER,
            field: 'user_id'
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
        price: {
            type: Sequelize.STRING,
            field: 'price',
            allowNull: false
        }
    },
    {
        timestamps: false,
        tableName: 'tickets'
    }
)
Ticket.hasMany(Comment)
Ticket.belongsTo(User)

module.exports = Ticket
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
        price: {
            type: Sequelize.INTEGER,
            field: 'price',
            allowNull: false
        }
        ,
        fraude: {
            type: Sequelize.NUMBER,
            field: 'fraude',
            allowNull: false
        }
    },
    {
        timestamps: true,
        tableName: 'tickets'
    }
)
Ticket.hasMany(Comment)
Ticket.belongsTo(User)

module.exports = Ticket
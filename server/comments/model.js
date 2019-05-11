const Sequelize = require('sequelize')
const sequelize = require('../db')
const User = require('../users/model')
const Comment = sequelize.define('comments'
    , {
        userName: {
            type: Sequelize.STRING,
            field: 'userName',
            allowNull: false
        },
        comment: {
            type: Sequelize.STRING,
            field: 'comment',
            allowNull: false
        },
    },
    {
        timestamps: false,
        tableName: 'comments'
    }
)

Comment.belongsTo(User)

module.exports = Comment
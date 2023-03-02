const { DataTypes } = require('sequelize');
const db = require('../db/db');
const User = require('../models/User')

const Role = db.define( 'Role', {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING
    }
});

Role.hasMany(User, {
    foreignKey : {
        allowNull : false,
        name : 'roleId'
    },
    sourceKey : 'id'
})

module.exports = Role;
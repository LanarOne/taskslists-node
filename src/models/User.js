const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');
const Taskslist = require('../models/TasksList');


const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      message: 'email deja pris'
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image : {
    type : DataTypes.STRING(150),
    allowNull : true
  }
}, {
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated'
});

User.hasMany(Taskslist, {
  foreignKey : {
    allowNull : false,
    name : 'authorId'
  },
  sourceKey : 'id'
})

module.exports = User;
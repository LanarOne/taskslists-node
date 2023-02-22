const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');
const Task = require('./Tasks');

const TaskList = db.define('TaskList', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated'
});
TaskList.hasMany(Task, {
    foreignKey: {
        allowNull: false,
        name: 'articleId'
    },
    sourceKey:'id'
})
module.exports = TaskList;
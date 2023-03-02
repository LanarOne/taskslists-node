const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');
const Task = require('./Task');

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
  }
}, {
  timestamps: true,
  createdAt: 'created',
  updatedAt: 'updated'
});
TaskList.hasMany(Task, {
    foreignKey: {
        allowNull: false,
        name: 'taskslistId'
    },
    sourceKey:'id'
})
module.exports = TaskList;
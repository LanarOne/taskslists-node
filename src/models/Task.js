const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');

const Task = db.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
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

module.exports = Task;
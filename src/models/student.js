const { sequelize } = require('../sequelize-connection');

import Sequelize from 'sequelize';

export const Student = sequelize.define(
  'student',
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: Sequelize.STRING(255), field: 'first_name' },
    lastName: { type: Sequelize.TEXT, field: 'last_name' }
  },
  { timestamps: false }
);

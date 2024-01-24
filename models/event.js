'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
    }
  }
  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
    },
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};

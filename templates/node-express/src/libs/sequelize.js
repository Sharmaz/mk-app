// Some libs as ORM config.
const { Sequelize } = require('sequelize');
const config = require('../config');
// const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const getURI = (dialect) => `${dialect}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const dialect = 'mysql';
const sequelize = new Sequelize(getURI(dialect), {
  dialect,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    }
  },
  logging: false,
});

// setupModels(sequelize);

module.exports = sequelize;

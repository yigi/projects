const Sequelize = require('sequelize');

//'database', 'username', 'password'
module.exports = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
    pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    },
});

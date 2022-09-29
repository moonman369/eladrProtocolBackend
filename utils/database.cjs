//var mysql = require('mysql');
require('dotenv').config();
const { Sequelize } = require('sequelize');

let dbhost = process.env.DB_HOST;
let dbuser=process.env.DB_USER;
let dbpassword = process.env.DB_PASSWORD;
let databaseName = process.env.DB_DATABASENAME;
console.log('db name:',dbhost);
const sequelize = new Sequelize(
    databaseName,
    dbuser,
    dbpassword,
     {
       host: dbhost,
       dialect: 'mysql'
     }
);

module.exports = sequelize;
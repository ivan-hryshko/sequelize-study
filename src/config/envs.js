require('dotenv').config();

const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_DATABASE = process.env.MYSQL_DATABASE
const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD
const MYSQL_ROOT_HOST = process.env.MYSQL_ROOT_HOST

module.exports = {
    MYSQL_USER,
    MYSQL_DATABASE,
    MYSQL_ROOT_PASSWORD,
    MYSQL_ROOT_HOST
}
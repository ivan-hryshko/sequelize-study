const { Sequelize } = require('sequelize');
console.log('process.env :>> ', process.env);
const { 
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_ROOT_HOST,
  MYSQL_ROOT_PASSWORD,
} = require('./config/envs')
// Create sequelize instance
const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_ROOT_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL via Sequelize!');
  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }
})();

module.exports = sequelize;

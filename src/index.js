const db = require('../models'); // ✅ no ()
const { sequelize } = db;
const { appStart } = require('./app');


// Test the connection
async function start(params) {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL via Sequelize!');
  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }

  appStart()
}

start()


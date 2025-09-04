const db = require('../models'); // ✅ no ()
/** @type {import('sequelize').Sequelize} */
const sequelize = db.sequelize;
const { appStart } = require('./app');


// Test the connection
async function start(params) {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    console.log('✅ Connected to MySQL via Sequelize!');
  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }

  appStart()
}

start()


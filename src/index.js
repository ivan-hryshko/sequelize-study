const db = require('../models'); // ✅ no ()
const { User, Post, Comment, sequelize } = db;


// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL via Sequelize!');
  } catch (error) {
    console.error('❌ Unable to connect:', error);
  }
  const user = await User.create({ name: 'Alice', email: 'alice@example.com' });

})();

module.exports = sequelize;

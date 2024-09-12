const db = require('./models');

// Sync all models with the database
db.sequelize.sync({ force: false })  // Use force: true to drop and recreate tables
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => console.log('Error syncing database:', err));

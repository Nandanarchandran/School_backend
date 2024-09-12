const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/index');
const apiRouter = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables are synchronized!');
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Error handling
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

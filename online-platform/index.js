const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const PORT = process.env.PORT || 5000;

const sequelize = new Sequelize('online_learning', 'learning_user', 'yourpassword', {
  host: 'localhost',
  dialect: 'postgres'
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

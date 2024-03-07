require('dotenv').config(); // To read .env file

const config = {
  port: 5000,
  dbUrlMongoDB: process.env.DB_URL,
};

module.exports = config;

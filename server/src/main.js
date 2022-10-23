const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const apiRouter = require('./routers/api-router');
const authRouter = require('./routers/auth-router');

const server = express();

const { SERVER_DOMAIN, SERVER_PROTOCOL, SERVER_PORT, DB_CONNECTION, TOKEN_SECRECT } = process.env;
const constantsInEnvFile = SERVER_DOMAIN && SERVER_PROTOCOL && SERVER_PORT && DB_CONNECTION && TOKEN_SECRECT;

try {
  if (!constantsInEnvFile) {
    throw new Error('Project constants are not defined in .env file...\n\Define before starting.')
  }

  server.use(express.json());
  server.use(morgan('tiny'));
  server.use(cors());
  server.use(express.static('public'))

  server.use('/api', apiRouter);
  server.use('/auth', authRouter);

  mongoose.connect(DB_CONNECTION, (err) => {
    if (err) {
      throw err.message
    }

    console.log('Connected to MongDB Atlas')
    server.listen(SERVER_PORT, (err) => {
      if (err) {
        console.error(err.message)
      }

      console.log(`Server running on ${SERVER_PROTOCOL}://${SERVER_DOMAIN}:${SERVER_PORT}`);
    });

  })
} catch (error) {
  console.error(error.message)
};



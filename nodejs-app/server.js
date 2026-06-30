const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const appMode = process.env.APP_MODE || 'default';
const logLevel = process.env.LOG_LEVEL || 'info';

app.get('/', (req, res) => {
  res.send(`Hello from EX288 Node.js app. APP_MODE=${appMode}, LOG_LEVEL=${logLevel}\n`);
});

app.get('/ready', (req, res) => {
  res.status(200).send('ready\n');
});

app.get('/health', (req, res) => {
  res.status(200).send('healthy\n');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
const profile = process.env.APP_PROFILE || 'dev';

app.get('/', (req, res) => {
  res.send(`Hello from Docker strategy app. APP_PROFILE=${profile}\n`);
});

app.get('/ready', (req, res) => {
  res.status(200).send('ready\n');
});

app.get('/health', (req, res) => {
  res.status(200).send('healthy\n');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Docker backend running on port ${port}`);
});

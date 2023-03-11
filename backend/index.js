const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let counter = 0;

app.get('/api/counter', (req, res) => {
  res.json({ counter });
});

app.post('/api/counter', (req, res) => {
  counter++;
  res.json({ counter });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


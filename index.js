const express = require('express');
const app = express();

const port = 3000;

// First endpoint
app.get('/name', (req, res) => {
  const fullName = "Hasan Can Sumer";
  res.send(fullName);
});

// Second endpoint
app.get('/group', (req, res) => {
  const group = "Kp-14";
  res.send(group);
});

// Third endpoint
app.get('/time', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(currentTime);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

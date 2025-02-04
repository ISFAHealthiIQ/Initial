// Sample Express server (we'll build this together)
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('EHR Platform Backend Running!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
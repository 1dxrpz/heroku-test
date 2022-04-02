const express = require('express');
const app = express();

const PORT = 80;

app.get('/', (request, respond) => {
  res.end("<h1>test</h1>");
});

app.listen(PORT, _ => {
  console.log("test");
})

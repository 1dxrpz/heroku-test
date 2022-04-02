const express = require('express');
const app = express();

const PORT = 13373;

app.get('/', (request, respond) => {
  respond.end("<h1>test</h1>");
});

app.listen(PORT, _ => {
  console.log("test");
})

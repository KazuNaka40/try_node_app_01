const express = require('express');

const app = express();
app.enable('trust proxy');

app.get('/', (req, res) => {
  console.log("received a request", req);
  res.render('hello.ejs');
});
const port = 8080;
console.log("まってるよ～", port);
app.listen(port);

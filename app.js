const express = require('express');

const app = express();

app.use(express.statics('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(8080);

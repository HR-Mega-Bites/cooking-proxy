const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, ()=> {
  console.log('I am alive and well, functioning on port ', port);
});

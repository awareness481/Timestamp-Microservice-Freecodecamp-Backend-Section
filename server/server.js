const express = require('express');
const moment = require('moment');

const port = process.env.PORT || 3000;

const app = express();

app.get('/:time', (req, res) => {
  const time  = req.params.time;
  if (!time)
    return res.status(404).send();
  
  const date = new Date(time)
  
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
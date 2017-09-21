const express = require('express');
const moment = require('moment');
const parseFormat = require('moment-parseformat');

const port = process.env.PORT || 3000;

const app = express();

app.get('/:time', (req, res) => {
  let time  = req.params.time;
  if (!time)
    return res.status(404).send();
  
  const timeF = parseFormat(time);
  if (!moment(time, timeF).isValid())
    return res.status(400).send();

  if (moment(time).format() === 'X')
    time = moment().unix(time);
  res.send({
    unix: moment(time).format('X'),
    "natural": moment(time).format('MMMM D, YYYY')
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
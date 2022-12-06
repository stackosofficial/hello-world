const express = require('express');

const app = express();

// Home route
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: 'Welcome to Threshold API Service' });
});

const PORT = process.env.PORT || 5001;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
  )
);

module.exports = app;

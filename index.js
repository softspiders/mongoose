const mongoose = require('mongoose');

const uri = 'YOUR_MONGODB_URI'; // for example: 'mongodb://localhost/test';
  
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected')
  })
  .catch(err => {
    console.log(err)
  });

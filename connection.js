const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.rbmbnn9.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})


//mongodb+srv://madavedisaikumar:<password>@cluster0.rbmbnn9.mongodb.net/?retryWrites=true&w=majority
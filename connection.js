const mongoose = require('mongoose');
//require('dotenv').config();
//    'mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/Hotel?retryWrites=true&w=majority'
mongoose.connect(`mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/chat?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
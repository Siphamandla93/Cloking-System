'use strict'

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    surname: String

});

module.exports = mongoose.model('Product', userSchema);
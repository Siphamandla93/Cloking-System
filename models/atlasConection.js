'use strict'

const express = require('express');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://Siphamandla_Mpalala:0748565458s@cluster0.kkok4.mongodb.net/myFirstDatabase?retryWrites=true';

const connectDB = async() => {

    await mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    console.log('MongoDB is connected to Atlas');
 
 };

 module.exports = connectDB;

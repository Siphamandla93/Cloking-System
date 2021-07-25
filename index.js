'use strict'

const express = require('express');
const app = express();
const connectToDB = require('./models/atlasConection')
const axphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

app.engine('handlebars',axphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

connectToDB();

app.use(express.json({extended:false}));



app.use('/api/viewAllUser', require('./api/api'));
app.use('/api/viewById', require('./api/api'));
app.use('/api/postUser/', require('./api/api'));
app.use('/api/deleteUser/', require('./api/api'));
app.use('/api/updateInfor/', require('./api/api'));



app.listen(PORT, () => console.log(`server is running on port ${PORT}` ));
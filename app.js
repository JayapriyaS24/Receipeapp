// import express

const express = require('express');
const receipeRouter = require('./routes/receipeRoutes');

// create an express app
const app =express();

// add a middleware to parse JSON
app.use(express.json());

// define the root route
app.use('/api/v1/receipes', receipeRouter);



// export the app
module.exports=app;
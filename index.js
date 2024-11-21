// import mongoose 
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

// connect to the database
mongoose.connect(process.env.MONGODB_URL)

.then(()=>{
    console.log('connected to the database');
    // listen for requests
    app.listen(process.env.PORT,()=>{
       console.log(`Server is running http://localhost:3002`);
    });
    
})
.catch((error) => {
    console.log("connection failed");
    console.log(error);
    
})


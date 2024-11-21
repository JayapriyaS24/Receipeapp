// import mongoose
const mongoose = require('mongoose');

const receipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    instruction: String,
    duration: Number,
    createdAt: {
        type: Date,
        default: Date.now 
    },
    updateddAt: {
        type: Date,
        default: Date.now 
    }
});

module.exports=mongoose.model('Receipe',receipeSchema,'receipes');
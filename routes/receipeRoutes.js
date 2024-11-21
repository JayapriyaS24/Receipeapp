// import express
const express = require('express');
const receipeController = require('../controllers/receipeController');

// create an express router
const receipeRouter = express.Router();

receipeRouter.get('/', receipeController.getAllReceipes);
receipeRouter.get('/:id', receipeController.getReceipeByID);
receipeRouter.post('/', receipeController.createReceipe);
receipeRouter.put('/:id', receipeController.updateReceipe);
receipeRouter.delete('/:id', receipeController.deleteReceipe);

// export the router
module.exports = receipeRouter;

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

function setUserRoutes(app) {
    router.get('/users', userController.getAllUsers);
    router.post('/users', userController.createUser);
    router.get('/users/:id', userController.getUserById);
    router.put('/users/:id', userController.updateUserById);
    router.delete('/users/:id', userController.deleteUserById);

    app.use('/api', router);
}

module.exports = setUserRoutes;
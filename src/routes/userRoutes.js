const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

function setUserRoutes(app) {
    router.get('/', userController.getAllUsers);
    router.post('/', userController.createUser);
    router.get('/:id', userController.getUserById);
    router.put('/:id', userController.updateUserById);
    router.delete('/:id', userController.deleteUserById);

    // Change the prefix to '/users'
    app.use('/users', router);
}

module.exports = setUserRoutes;
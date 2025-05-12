const UserModel = require('../models/userModel'); // Import the UserModel class

exports.getAllUsers = (req, res) => {
    const users = UserModel.getAllUsers(); // Use the static method to get all users
    res.json(users);
};

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = UserModel.addUser({ name, email }); // Use the static method to add a user
    res.status(201).json(newUser);
};

exports.getUserById = (req, res) => {
    const user = UserModel.getUserById(parseInt(req.params.id)); // Use the static method to get a user by ID
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
};

exports.updateUserById = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const updatedUser = UserModel.updateUserById(parseInt(req.params.id), { name, email }); // Use the static method to update a user
    if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
};

exports.deleteUserById = (req, res) => {
    const deletedUser = UserModel.deleteUserById(parseInt(req.params.id)); // Use the static method to delete a user
    if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();
};
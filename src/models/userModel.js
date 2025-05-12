const users = [];
let userId = 1;

class UserModel {
    static getAllUsers() {
        return users;
    }

    static addUser(user) {
        const newUser = { id: userId++, ...user };
        users.push(newUser);
        return newUser;
    }

    static getUserById(id) {
        return users.find(user => user.id === id);
    }

    static updateUserById(id, updatedUser) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updatedUser };
            return users[index];
        }
        return null;
    }

    static deleteUserById(id) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            return users.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = UserModel; // Use CommonJS export
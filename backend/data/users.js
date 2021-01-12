const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        idAdmin: true
    },
    {
        name: 'Rahul',
        email: 'rahul@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Chibi',
        email: 'chibi@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

module.exports = users;
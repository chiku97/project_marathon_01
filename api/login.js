// filepath: /backend-project/backend-project/api/login.js

const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const adminCred = {
        username: "newtonschool",
        password: "123456",
        isLogged: function(username,password){
            return this.username ===username && this.password===password
        }
    }
    if(!username || !password){
        return res.status(401).json({message: "username and password required"})
    }

    if (adminCred(username, password)) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});

module.exports = router;
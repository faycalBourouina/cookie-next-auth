const axios = require('axios');
const CONFIG = require('../config');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    //verifying credentials using json api to mock a DB
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        data.find( user => {
            if (user.email == email && user.website == password) {
                const userData = {
                        username: user.username,
                        id: user.id,
                        authenticated: true
                    }
                res.cookie('token', userData, CONFIG.COOKIE.options);
                return res.send(userData);
            }
        })
        res.status(403).send('Invalid username or password');
    }
    catch(e) {
        const { status, statusText } = e.response;
        return res.status(status).send(statusText);
    }
}

exports.profile = async (req, res) => {
    const { token } = req.signedCookies; 
    if(token) {
        try{
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${token.id}`);
            return res.send(data);
        } catch(e) {
                const { status, statusText } = e.response;
                return res.status(status).send(statusText);
        }
    }
    return res.status(403).send("You're not connected");
}

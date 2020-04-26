const controllers = require('./controllers/index');

module.exports = app => {
    app.post('/auth/login', controllers.login);   
    app.get('/user/profile', controllers.profile);
}

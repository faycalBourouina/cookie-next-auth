const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = require('./server/router');
const CONFIG = require('./server/config');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

//next server set up and handling requests 
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then( () => {
    //express server set up
    const server = express();
    
    //express midllewares
    server.use(express.json());
    server.use(cookieParser(CONFIG.COOKIE.secret));
  
    //express router
    router(server);

    //passing express get requests through next server 
    server.get('*', (req, res) => {
        return handle(req,res);
    }); 
  
    server.listen(port, () => {
        console.log(`listening on port kharya farkh ${port}`);
    })
});




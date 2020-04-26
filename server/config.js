exports.COOKIE = {
    secret:'ouu rahii mkawdaa ou rahi tnaker ahhh delali ',
    options: {
        httpOnly: true, 
        secure: process.env.NODE_ENV == 'production',        
        signed: true
    }
}

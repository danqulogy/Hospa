
module.exports = function(app){
    const authController = require('../controller/authentication');
    const jwt = require('express-jwt');

    const secret = require('../config/secrets');
    const secretPassword = secret.returnPassword();

    let auth = jwt({
            secret: secretPassword,
            userProperty: 'payload'
        });
        

    // registering a user
    app.route('/api/user/register')
                .post( authController.registerUser );

    // login a user
    app.route('/api/user/login')
                .post( authController.loginUser );


    // update a user
    app.route('/api/user/update')
                .put( authController.updateUser );

    // get a specific users profile
    app.route('/api/user/profile')
                .get( auth, authController.getUserProfile );

    // get any users profile
    app.route('/api/user/all/:profileId')
                .get( authController.getUserProfile );
}
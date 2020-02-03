const express  = require('express');
const app      = express();
const cors = require('cors');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const path     = require('path');
const passport = require('passport');

const port    = process.env.PORT || 3000;

// use cors to allow local api call
app.use( cors() );

// change this to your db_url, this is for demo purposes
const onlineMlabServer = "mongodb://henry212:dWy6_3z4..@ds133041.mlab.com:33041/hospa";

// connect to the mongodb instance
mongoose.Promise = global.Promise;
mongoose.connect(onlineMlabServer, { useNewUrlParser: true });


// when open connnection 
mongoose.connection.once('open', (err)=>{
    if(err) throw err;
    console.log('MongoDB for Jobly connected successfully to Hospa Ghana');
});


// parse application/json
app.use(bodyParser.json())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// initialize passport js
require('./config/passport');
app.use(passport.initialize());

// set these static files
app.use( express.static( path.join( __dirname, 'public') ) );

// send this file to first time user
app.get('*', (req, res, next) =>{


    const currentPath = req.path.substring(1,4);


        if( currentPath !== 'api' ){
			 console.log(req.path);
            res.sendFile( path.join( __dirname, './public/index.html') );

        }else{
            next();
        }

});

// register the routes
const authRoutes      = require('./routes/authentication');
const generalRoutes      = require('./routes/generalRoutes');
const staffRoutes       = require('./routes/staff');
const patientRoutes      = require('./routes/patient');
const pharmacyRoutes      = require('./routes/pharmacy');

// pass in dependencies
authRoutes(app);
generalRoutes(app);
pharmacyRoutes(app);
staffRoutes(app);
patientRoutes(app);



// if the site is wrong
app.use(function(req, res) {

		console.log(req.path);

        res.status(404).send({url: req.originalUrl + ' not found'})
});

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
});
      

// start and listen on this port
app.listen(port, (err)=>{
        if(err) throw err;
        console.log('Server is running on port '+ port);
});

// lets prepare a user id along with any data, so for every request it shall be sent

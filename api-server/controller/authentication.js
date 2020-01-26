const mongoose = require('mongoose');
const newJob = require('../models/authentication');
const passport = require('passport');

const User = mongoose.model('newUserModel');


// register user
exports.registerUser = (req, res) =>{

    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.role = req.body.role;
    user.license = req.body.license;

    user.setPassword(req.body.password);

    if(
      req.body.name != '' && 
      req.body.email != '' && 
      req.body.role != '' && 
      req.body.license != '' 
    ){

          user.save(function(err) {
            var token;
            token = user.generateJwt();
            res.status(200);
            res.json({
            "token" : token
            });
        });

    }else if(req.body.name == ''){
      res.send('Please fill in name of user');
    }else if(req.body.email == ''){
      res.send('Please fill in email of user');
    }else if(req.body.role == ''){
      res.send('Please fill in role of user');
    }else if(req.body.license == ''){
      res.send('Please fill in license of user');
    }
    
 

}


// update user
exports.updateUser = (req, res) =>{

  var user = new User();

  console.log( req.body );

  user._id = req.body._id;
  user.name = req.body.name;
  user.email = req.body.email;
  user.role = req.body.role;
  user.license = req.body.license;

  user.setPassword(req.body.password);

  const userId = req.body._id;

  if(
    req.body.name != '' && 
    req.body.email != '' && 
    req.body.role != '' && 
    req.body.license != '' 
  ){

    User.findByIdAndUpdate( {'_id': userId }, user, (err, updatedUser) =>{
        if(err) res.send(err);

        console.log( updatedUser );

        res.send( updatedUser );
    });


  }else if(req.body.name == ''){
    res.send('Please fill in name of user');
  }else if(req.body.email == ''){
    res.send('Please fill in email of user');
  }else if(req.body.role == ''){
    res.send('Please fill in role of user');
  }else if(req.body.license == ''){
    res.send('Please fill in license of user');
  }
  


}


// login user
exports.loginUser = (req, res) =>{

    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
  
      if(
        req.body.name != '' && 
        req.body.email != '' && 
        req.body.password != '' 
      ){

            passport.authenticate('local', function(err, user, info){
              var token;
          
              // If Passport throws/catches an error
              if (err) {
                res.status(404).json(err);
                return;
              }
          
              // If a user is found
              if(user){
                token = user.generateJwt();
                res.status(200);
                res.json({
                  "token" : token
                });
      
              } else {
                // If user is not found
                res.status(401).json(info);
              }
      
            })(req, res);

  
      }else if(req.body.name == ''){
        res.send('Please fill in name of user');
      }else if(req.body.email == ''){
        res.send('Please fill in email of user');
      }else if(req.body.password == ''){
        res.send('Please fill in password of user');
      }

}


// get user profile
exports.getUserProfile = (req, res) =>{

        // If no user ID exists in the JWT return a 401
        if (!req.payload._id) {
          res.status(401).json({
            "message" : "UnauthorizedError: private profile"
          });
        } else {
          // Otherwise continue
          User
            .findById(req.payload._id , (err, user)=>{
                    if(err){
                        res.status(401).json({
                            "message" : "UnauthorizedError: User JWT id is wrong"
                          });
                    }
            })
            .exec(function(err, user) {
              res.status(200).json(user);
            });
        }
      
}

// get user profile
exports.getPublicUserProfile = (req, res) =>{

    res.send('Getting the profile for you');

}
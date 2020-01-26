const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const crypto   = require('crypto');
const jwt      = require('jsonwebtoken');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const secret = require('../config/secrets');
const secretPassword = secret.returnPassword();

// user registeration schema
const userSchema = new Schema({
    "email": {
      type: String,
      unique: true,
      required: true
    },
    "name": {
      type: String,
      required: true
    },
    "role":{
      type: String,
      required: true
    },
    "license":{
      type: String,
      required: true
    },
    "hash": String,
    "salt": String
});



// set the password
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };


// validate the password
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };


// generate jwt
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: parseInt(expiry.getTime() / 1000),
    }, secretPassword); 
  };


// setUserId
userSchema.methods.setUserId = function(password){
  // here we must get the number of users registered in the database
  // then we add up and now set the user id to the user

  
};


// set this user model
const newUserSchema = mongoose.model('newUserModel', userSchema);

module.exports = newUserSchema;


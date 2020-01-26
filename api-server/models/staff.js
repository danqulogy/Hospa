const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// the jobs schema
const newStaff = new Schema({
                'firstName': String, // required
                'lastName' : String, // required
                'middleName' : String,
                'email': String,
                'status': String,
                'gender': String,
                'phone': String,  // required
                'dateOfBirth': String, // required
                'guardian': String, // required
                'location': String, // required
                'country': String,
                'role': String,
                'identification': String,
                'workingSince': String,
                'workingEnded': String,
                'profilePicture': String,
                'cv': String
            });

// set this as the jobs model
const newStaffModel = mongoose.model('newStaffModel', newStaff);


// export this for other models
module.exports = newStaffModel;


// every doctor will have his own login
// then the general overseer will be the one to controll their logins
// he can either delete employee account from his seat
// therefore depending on your cridentials some informations are restricted
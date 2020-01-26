const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// the jobs schema
const newPatient = new Schema({
             'firstName': String,
             'lastName': String,
             'email': String,
             'status': String,
             'phone': String,
             'registrationDate': String,
             'guardian': String,
             'gender': String,
             'location': String,
             'relation': String,
             'country': String,
             'city': String,
             'moreInformation': String
            });

// set this as the jobs model
const newPatientModel = mongoose.model('newPatientModel', newPatient);


// export this for other models
module.exports = newPatientModel;


// every doctor will have his own login
// then the general overseer will be the one to controll their logins
// he can either delete employee account from his seat
// therefore depending on your cridentials some informations are restricted
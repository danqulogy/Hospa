const mongoose = require('mongoose');
const newPatientModel = require('../models/models');

let newPatient = mongoose.model('newPatientModel');


// get me all patient ++
exports.getAllPatient = (req,res)=>{

    newPatient.find({}, (err, patient) =>{
        if(err) res.send(err);
        res.send(patient);
    });

}

// delete one job
exports.deleteOnePatient = (req,res)=>{
    const patientId = req.params.patientId;

    newPatient.delete( {'_id': patientId }, (err, patient) =>{
        if(err) res.send(err);
        res.send({message: patient.firstName+ " deleted"});
    });

}

// get only one job
exports.getOnePatient = (req,res)=>{

const patientId = req.params.patientId;

    newPatient.find( {'_id': patientId }, (err, patient) =>{
        if(err) res.send(err);
        res.send(patient);
    });

}


// add one job
exports.addAnewPatient = (req,res)=>{
const patient = new newPatient( req.body );

    patient.save( (err, patient) =>{
        if(err) res.send(err);
        res.send(patient._id);
    });

}


// now user authentication
// when user registers
// user can login
// data of user saved only route guards later for

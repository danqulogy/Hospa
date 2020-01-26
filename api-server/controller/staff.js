const mongoose = require('mongoose');
const newStaffModel = require('../models/staff');

let newStaff = mongoose.model('newStaffModel');


// get me all patient ++
exports.getAllStaff = (req,res)=>{

    newStaff.find({}, (err, staff) =>{
        if(err) res.send(err);
        res.send(staff);
    });

}

// delete one job
exports.deleteOneStaff = (req,res)=>{
    const staffId = req.params.staffId;

    newStaff.delete( {'_id': staffId }, (err, staff) =>{
        if(err) res.send(err);
        res.send({message: staff.firstName+ " deleted"});
    });

}

// get only one job
exports.getOneStaff = (req,res)=>{
    const staffId = req.params.staffId;

    newStaff.find( {'_id': staffId }, (err, staff) =>{
        if(err) res.send(err);
        res.send(staff);
    });

}


// add one job
exports.addAnewStaff = (req,res)=>{
const patient = new newStaff( req.body );

    patient.save( (err, staff) =>{
        if(err) res.send(err);
        res.send(staff._id);
    });

}


// now user authentication
// when user registers
// user can login
// data of user saved only route guards later for

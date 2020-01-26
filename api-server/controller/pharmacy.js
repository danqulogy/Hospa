const mongoose = require('mongoose');
const newPatientModel = require('../models/pharmacy');

let newMedicine = mongoose.model('newMedicineModel');


// get me all medcines ++
exports.getAllMedicine = (req,res)=>{

    newMedicine.find({}, (err, medicine) =>{
        if(err) res.send(err);
        res.send(medicine);
    });

}

// delete one job
exports.deleteOneMedicine = (req,res)=>{

    const medicineId = req.params.medicineId;
    
    newMedicine.findOneAndRemove( {'_id': medicineId }, (err, medicine) =>{
        if(err) res.send(err);
        res.send({message: medicine.medicineName + " deleted"});
    });

}

// get only one job
exports.getOneMedicine = (req,res)=>{

    const medicineId = req.params.medicineId;

    newMedicine.find( {'_id': medicineId }, (err, medicine) =>{
        if(err) res.send(err);
        res.send(medicine);
    });

}


// add one job
exports.addAnewMedicine = (req,res)=>{
const medicine = new newMedicine( req.body );

    medicine.save( (err, medicine) =>{
        if(err) res.send(err);
        res.send(medicine._id);
    });

}

// update one job
exports.updateOneJob = (req,res)=>{

    const medicineId = req.params.medicineId;
    const updateMedicineBody = req.body;
    
    newMedicine.findByIdAndUpdate( {'_id': medicineId }, updateMedicineBody, (err, medicine) =>{
        if(err) res.send(err);
        res.send({message: medicine.medicineName + " updated"});
    });

}
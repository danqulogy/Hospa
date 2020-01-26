const mongoose = require('mongoose');

const newJob = require('../models/models'); // patient
const newStaffModel = require('../models/staff'); // staff
const newPatientModel = require('../models/pharmacy'); // patient

let patients = mongoose.model('newPatientModel');
let newStaff = mongoose.model('newStaffModel');
let newMedicine = mongoose.model('newMedicineModel');


// get me all jobs
exports.getAllDataCount = (req,res)=>{

    let countData = {
        'patientsCount': '',
        'staffCount': '',
        'medicineCount': ''
    };

    patients.find({}, (err, patient) =>{
            if(err) res.send(err);

            countData.patientsCount = patient.length.toString();

            // after total patients is found
            newStaff.find({}, (err, staff) =>{
                if(err) res.send(err);
    
                countData.staffCount = staff.length.toString();
    
                // then after total medicines is found
                newMedicine.find({}, (err, medicine) =>{
                    if(err) res.send(err);
        
                    countData.medicineCount = medicine.length.toString();
        
                    // by this time data will have been updated
                    res.send(countData);
                });
                
            });


        });

   
} 
 

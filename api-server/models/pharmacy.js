const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// the jobs schema
const newMedicine = new Schema({
             'medicineName': String,
             'identification': String,
             'manufacturedBy': String,
             'volume': String,
             'currency': String,
             'quantity': String,
             'batchNo': String,
             'sellingPrice': String,
             'expDate': String
            });

// set this as the jobs model
const newMedicineModel = mongoose.model('newMedicineModel', newMedicine);


// export this for other models
module.exports = newMedicineModel;
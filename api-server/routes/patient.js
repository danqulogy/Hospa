module.exports = function(app){
    const patientController = require('../controller/patient');


// --------------------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------------------//

   app.route('/api/patient/:patientId')
   
            // delete one patient
           .delete( patientController.deleteOnePatient )

           // get one patient
           .get( patientController.getOnePatient );


    // posting & deleting a new patient 
    app.route('/api/patient')
                // add one patient
                .post( patientController.addAnewPatient )

                // get all patients
                .get( patientController.getAllPatient );


}
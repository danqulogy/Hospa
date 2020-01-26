module.exports = function(app){
    const pharmacyController = require('../controller/pharmacy');

// --------------------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------------------//
   
    // pharmacy routing
    app.route('/api/pharmacy/:medicineId')
   
                // delete one medicine
               .delete( pharmacyController.deleteOneMedicine )

                // update one medicine
               .put( pharmacyController.updateOneJob )

               // get one medicine
               .get( pharmacyController.getOneMedicine );


    // posting & deleting a new pharmacy medecine 
    app.route('/api/pharmacy')
                    // add one medicine
                    .post( pharmacyController.addAnewMedicine )

                    // get all medicines
                    .get( pharmacyController.getAllMedicine );


                    // add medicine/ delete medicine / update medicine
                    // check sold medicine
}
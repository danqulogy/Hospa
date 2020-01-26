module.exports = function(app){
    const staffController = require('../controller/staff');

// --------------------------------------------------------------------------------------------------------------------//
// --------------------------------------------------------------------------------------------------------------------//
   
    // staff routing
    app.route('/api/staff/:staffId')
   
                // delete one staff
               .delete( staffController.deleteOneStaff )

               // get one staff
               .get( staffController.getOneStaff );


    // posting & deleting a new staff 
    app.route('/api/staff')
                    // add one staff
                    .post( staffController.addAnewStaff )

                    // get all staffs
                    .get( staffController.getAllStaff );


}
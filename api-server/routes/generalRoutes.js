module.exports = function(app){
    const generalController = require('../controller/controller');


    // posting & deleting a new patient 
    app.route('/api/generalDetails')
    
                // get all patients
                .get( generalController.getAllDataCount );


}
import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../utils.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})

export class PatientDetailsComponent implements OnInit {

  public allPatientDetails;
  public userSearchContent: String = '';

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {
    this.utils.getAllPatient();
    this.logTheInformationOut();
  }


  logTheInformationOut() {
    this.allPatientDetails = this.utils.allPatients;
  }


  checkTheUserData(){
    this.allPatientDetails = [];

    this.utils.allPatients.map( onePatient => {

          let username;

          if ( onePatient.middleName !== undefined  ) {
             username = `${onePatient.firstName} ${onePatient.middleName} ${onePatient.lastName}`;
          } else {
             username = `${onePatient.firstName} ${onePatient.lastName}`;
          }


          if ( username.toLowerCase().replace(/\s+/g, '').match(this.userSearchContent.toLowerCase().replace(/\s+/g, '') ) ) {
            this.allPatientDetails.push(onePatient);
          } else if ( this.userSearchContent.length === 0 ) {
            this.allPatientDetails.push(onePatient);
          }

    });

  }

}

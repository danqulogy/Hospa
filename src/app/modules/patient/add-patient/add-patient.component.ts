import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UtilsService } from '../../../utils.service';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})

export class AddPatientComponent implements OnInit {

  public genderTypes = ['Male', 'Female'];

  public patientInformation = {
    'firstName': '', // required
    'lastName' : '', // required
    'middleName' : '',
    'email': '',
    'status': '',
    'gender': '',
    'phone': '',  // required
    'registrationDate': '', // required
    'guardian': '', // required
    'relation': '',
    'location': '', // required
    'country': '',
    'moreInformation': ''
  }

  private serverUrl = this.utils.serverUrl;

  constructor(
    public snackBar: MatSnackBar,
    public utils: UtilsService,
    public http: Http
  ) { }

  ngOnInit() {
  }

  verifyData() {

        if (
          this.patientInformation.firstName !== '' &&
          this.patientInformation.lastName !== '' &&
          this.patientInformation.phone !== '' &&
          this.patientInformation.registrationDate !== '' &&
          this.patientInformation.location !== '' &&
          this.patientInformation.gender !== '' &&
          this.patientInformation.status !== ''
        ) {
          return true;
        } else {
          return false;
        }

  }

  sendThisInformation() {

          if ( this.verifyData() === true ) {
            this.patientInformation.registrationDate = `${this.patientInformation.registrationDate}`;

            this.sendDataToBackend(this.patientInformation);
          } else if ( this.patientInformation.firstName === '' ) {
            this.openSnackBar('Please fill in first name', 'Okay');
          } else if ( this.patientInformation.lastName === '' )  {
            this.openSnackBar('Please fill in last name', 'Okay');
          } else if ( this.patientInformation.phone === '' )  {
            this.openSnackBar('Please fill in phone number', 'Okay');
          } else if ( this.patientInformation.registrationDate === '' )  {
            this.openSnackBar('Please fill in registration date', 'Okay');
          } else if ( this.patientInformation.location === '' )  {
            this.openSnackBar('Please fill in place of stay', 'Okay');
          } else if ( this.patientInformation.gender === '' )  {
            this.openSnackBar('Please fill in gender of patient', 'Okay');
          } else if ( this.patientInformation.status === '' )  {
            this.openSnackBar('Please fill in status of patient', 'Okay');
          }
  }


  sendDataToBackend(patientData) {
      const patientUrl = `${this.serverUrl}/patient`;

      this.http.post(patientUrl, patientData).subscribe(
        (res) => { this.resetEverything(); },
        (err) => { this.openSnackBar('Storing of data failed, please try again', 'Okay'); }
      );

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }


  resetEverything() {
      this.openSnackBar('Storing of patient data was successfull', 'Okay');

      this.patientInformation = {
        'firstName': '', // required
        'lastName' : '', // required
        'middleName' : '',
        'email': '',
        'status': '',
        'gender': '',
        'phone': '',  // required
        'registrationDate': '', // required
        'guardian': '', // required
        'relation': '',
        'location': '', // required
        'country': '',
        'moreInformation': ''
      };

  }

}

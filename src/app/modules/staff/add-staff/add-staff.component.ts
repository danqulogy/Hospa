import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UtilsService } from '../../../utils.service';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  public genderTypes = ['Male', 'Female'];

  public staffInformation = {
    'firstName': '', // required
    'lastName' : '', // required
    'middleName' : '',
    'email': '',
    'status': '',
    'gender': '', // required
    'phone': '',  // required
    'dateOfBirth': '', // required
    'guardian': '', // required
    'location': '', // required
    'country': '',
    'role': '', // required
    'identification': '', // required
    'workingSince': '', // required
    'workingEnded': '',
    'profilePicture': '',
    'cv': ''
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
        this.staffInformation.firstName !== '' &&
        this.staffInformation.lastName !== '' &&
        this.staffInformation.gender !== '' &&
        this.staffInformation.dateOfBirth !== '' &&
        this.staffInformation.phone !== '' &&
        this.staffInformation.guardian !== '' &&
        this.staffInformation.role !== '' &&
        this.staffInformation.workingSince !== '' &&
        this.staffInformation.identification !== ''
    ) {
      return true;
    } else {
      return false;
    }

  }

  sendThisInformation() {

    if ( this.verifyData() === true ) {
      this.staffInformation.dateOfBirth = `${this.staffInformation.dateOfBirth}`;
      this.staffInformation.workingSince = `${this.staffInformation.workingSince}`;
      this.staffInformation.workingEnded = `${this.staffInformation.workingEnded}`;

      this.sendDataToBackend(this.staffInformation);
    } else if ( this.staffInformation.firstName === '' ) {
      this.openSnackBar('Please fill in first name', 'Okay');
    } else if ( this.staffInformation.lastName === '' )  {
      this.openSnackBar('Please fill in last name', 'Okay');
    } else if ( this.staffInformation.guardian === '' )  {
      this.openSnackBar('Please fill in guardian of staff', 'Okay');
    } else if ( this.staffInformation.role === '' )  {
      this.openSnackBar('Please fill in role of staff ( Doctor, Nurse etc...)', 'Okay');
    } else if ( this.staffInformation.gender === '' )  {
      this.openSnackBar('Please fill in gender of staff', 'Okay');
    } else if ( this.staffInformation.identification === '' )  {
      this.openSnackBar('Please fill in license id of staff', 'Okay');
    } else if ( this.staffInformation.phone === '' )  {
      this.openSnackBar('Please fill in phone number', 'Okay');
    } else if ( this.staffInformation.dateOfBirth === '' )  {
      this.openSnackBar('Please fill in date of birth', 'Okay');
    } else if ( this.staffInformation.workingSince === '' )  {
      this.openSnackBar('Please fill in working start date of staff', 'Okay');
    }

  }


  sendDataToBackend(patientData) {
    const patientUrl = `${this.serverUrl}/staff`;

    console.log(patientData);

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
    this.openSnackBar('Storing of staff data was successfull', 'Okay');

    this.staffInformation = {
      'firstName': '', // required
      'lastName' : '', // required
      'middleName' : '',
      'email': '',
      'status': '',
      'gender': '',
      'phone': '',  // required
      'dateOfBirth': '', // required
      'guardian': '', // required
      'location': '', // required
      'country': '',
      'role': '',
      'identification': '',
      'workingSince': '',
      'workingEnded': '',
      'profilePicture': '',
      'cv': ''
    };

  }


}

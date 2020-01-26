import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../utils.service';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { MatSnackBar } from '@angular/material';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public userInformation = {
    'name':'',
    'role':'',
    'license':'',
    'email': '',
    'password': ''
  }

  public hospitalRoles = this.utils.allHospitalRoles;
  private serverUrl = this.utils.serverUrl;


  constructor(
    public utils: UtilsService,
    private auth: AuthenticationService,
    private router: Router,
    public http: Http,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getUserProfileDetails();
  }

  getUserProfileDetails(){

    this.auth.profile().subscribe(
      (res) => {
      this.userInformation = res.json();
    }, (err) => {
      this.openSnackBar('Sorry your cridentials are wrong, please try again', 'Okay');
    });

  }

  updateUserProfile(userInformation){

    const patientUrl = `${this.serverUrl}/user/update`;

    this.http.put(patientUrl, userInformation).subscribe(
      (res) => { this.refreshEverything();  },
      (err) => { this.openSnackBar('Update of profile data failed, please try again', 'Okay');  }
    );
  

  }

  refreshEverything(){
    this.getUserProfileDetails();
    this.openSnackBar('Update of profile data successful', 'Okay');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

}


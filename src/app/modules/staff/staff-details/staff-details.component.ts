import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../utils.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.scss']
})
export class StaffDetailsComponent implements OnInit {

  public allStaffDetails;
  public userSearchContent: String = '';

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {
    this.utils.getAllStaff();
    this.logTheInformationOut();
  }


  logTheInformationOut() {
    this.allStaffDetails = this.utils.allStaff;
  }


  checkTheUserData() {
    this.allStaffDetails = [];

    this.utils.allStaff.map( staff => {

          let username;

          if ( staff.middleName !== undefined  ) {
             username = `${staff.firstName} ${staff.middleName} ${staff.lastName}`;
          } else {
             username = `${staff.firstName} ${staff.lastName}`;
          }

          // if the name matches any of the names
          if ( username.toLowerCase().replace(/\s+/g, '').match(this.userSearchContent.toLowerCase().replace(/\s+/g, '') ) ) {
            this.allStaffDetails.push(staff);

            // if the name dosent match any of them
          } else if ( this.userSearchContent.length === 0 ) {
            this.allStaffDetails.push(staff);
          }

    });

  }


}

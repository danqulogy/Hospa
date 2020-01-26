import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../utils.service';

@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.scss']
})
export class AllStaffComponent implements OnInit {

  public allPatientDetails;
  public userSearchContent: String = '';

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {
    this.utils.getAllStaff();
    this.logTheInformationOut();
  }


  logTheInformationOut() {
    this.allPatientDetails = this.utils.allStaff;
  }



}

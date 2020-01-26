import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../utils.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {

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



}

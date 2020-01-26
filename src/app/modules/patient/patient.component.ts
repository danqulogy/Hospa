import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UtilsService } from '../../utils.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  @ViewChild('patientComponents') patientComponents: ElementRef;

  public showAddPatient = false;
  public showPatientDetails = false;
  public showAllPatientDetails = false;
  public showExportPatientDetails = false;

  constructor(
    public utils: UtilsService
  ) {
    this.utils.pageTitle = 'Patient';
  }

  ngOnInit() {
    this.focusOneBox();
  }


  showAddPatientScreen() {
    this.hideAllScreens();

    this.showAddPatient = true;

    this.focusOneBox();
  }

  showPatientDetailsScreen() {
    this.hideAllScreens();

    this.showPatientDetails = true;

    this.focusOneBox();
  }

  showAllPatientDetailsScreen() {
    this.hideAllScreens();

    this.showAllPatientDetails = true;

    this.focusOneBox();
  }

  showExportPatientDetailsScreen() {
    this.hideAllScreens();

    this.showExportPatientDetails = true;

    this.focusOneBox();
  }


  focusOneBox() {
      this.patientComponents.nativeElement.scrollIntoView();
      this.patientComponents.nativeElement.focus();
  }

  hideAllScreens() {
    this.showAddPatient = false;
    this.showPatientDetails = false;
    this.showAllPatientDetails = false;
    this.showExportPatientDetails = false;
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UtilsService } from '../../utils.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  @ViewChild('patientComponents') patientComponents: ElementRef;

  public showExportstaffData = false;
  public showAllStaffDetails = false;
  public showStaffDetails = false;
  public showAddStaff = false;

  constructor(
    public utils: UtilsService
  ) {
    this.utils.pageTitle = 'Staff';
  }

  ngOnInit() {
  }


  showAddStaffScreen() {
    this.hideAllScreens();

    this.showAddStaff = true;

    this.focusOneBox();
  }

  showStaffDetailsScreen() {
    this.hideAllScreens();

    this.showStaffDetails = true;

    this.focusOneBox();
  }

  showAllStaffDetailsScreen() {
    this.hideAllScreens();

    this.showAllStaffDetails = true;

    this.focusOneBox();
  }

  showExportStaffDetailsScreen() {
    this.hideAllScreens();

    this.showExportstaffData = true;

    this.focusOneBox();
  }


  focusOneBox() {
      this.patientComponents.nativeElement.scrollIntoView();
      this.patientComponents.nativeElement.focus();
  }

  hideAllScreens() {
    this.showExportstaffData = false;
    this.showAllStaffDetails = false;
    this.showStaffDetails = false;
    this.showAddStaff = false;
  }

}

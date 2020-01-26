import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UtilsService } from '../../utils.service';


@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {


  @ViewChild('patientComponents') patientComponents: ElementRef;

  public showMedicineStatistics = false;
  public showAddMedicine = false;
  public showAllMedicineDetails = false;
  public showAddMedicineParent = false;

  constructor(
    private utils: UtilsService
  ) { }

  
  ngOnInit() {
    this.utils.getAllMedicines(); 
  }

    showAddPatientScreen() {
      this.hideAllScreens();

      this.showMedicineStatistics = true;

      this.focusOneBox();
    }

    showAllMedicineDetailsScreen() {
      this.hideAllScreens();

      this.showAllMedicineDetails = true;

      this.focusOneBox();
    }

    showAddMedicineParentScreen(){
      this.hideAllScreens();

      this.showAddMedicineParent = true;

      this.focusOneBox();
    }

    showAllMedicineStatistics(){
      this.hideAllScreens();

      this.showMedicineStatistics = true;

      this.focusOneBox();
    }

 
    focusOneBox() {
        this.patientComponents.nativeElement.scrollIntoView();
        this.patientComponents.nativeElement.focus();
    }

    hideAllScreens() {
      this.showMedicineStatistics = false;
      this.showAddMedicine = false;
      this.showAllMedicineDetails = false;
      this.showAddMedicineParent = false;
    }



  }


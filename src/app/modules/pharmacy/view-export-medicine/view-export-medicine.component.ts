import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AddMedicineComponent } from 'app/modules/pharmacy/add-medicine/add-medicine.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import * as Chartist from 'chartist';
import { UtilsService } from '../../../utils.service';


@Component({
  selector: 'app-view-export-medicine',
  templateUrl: './view-export-medicine.component.html',
  styleUrls: ['./view-export-medicine.component.scss']
})
export class ViewExportMedicineComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private utils: UtilsService
  ) { }

  public allMedicines = this.utils.allMedicines;

  addANewMedicine(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(AddMedicineComponent, dialogConfig);  

    dialogRef.afterClosed().subscribe( data =>{
      this.allMedicines = this.utils.allMedicines;
    });

  }

  ngOnInit() {
  }
  
}

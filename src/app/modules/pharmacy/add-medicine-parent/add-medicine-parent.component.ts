import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UtilsService } from '../../../utils.service';
import { FormGroup } from '@angular/forms/src/model';
import { AddMedicineComponent } from 'app/modules/pharmacy/add-medicine/add-medicine.component';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-add-medicine-parent',
  templateUrl: './add-medicine-parent.component.html',
  styleUrls: ['./add-medicine-parent.component.scss']
})
export class AddMedicineParentComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    public utils: UtilsService,
    public http: Http,
    private dialog: MatDialog,
    // private dialogRef: MatDialogRef<AddMedicineComponent>
    // @Inject(MAT_DIALOG_DATA) data
  ) { 
    // this.description = data.description;
  }

  public allMedicines = this.utils.allMedicines;
  public userSearchContent = '';
  private serverUrl = this.utils.serverUrl;

  addANewMedicine(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(AddMedicineComponent, dialogConfig);  

    dialogRef.afterClosed().subscribe( data =>{
      this.allMedicines = this.utils.allMedicines;
    });

  }

  checkTheUserData(){
    this.allMedicines = [];

    this.utils.allMedicines.map( oneMedicine => {

          let medicinename = oneMedicine.medicineName;
          let manufacturername = oneMedicine.manufacturedBy;

          if (
            medicinename.toLowerCase().replace(/\s+/g, '').match(this.userSearchContent.toLowerCase().replace(/\s+/g, '') ) 
            ||
            manufacturername.toLowerCase().replace(/\s+/g, '').match(this.userSearchContent.toLowerCase().replace(/\s+/g, '') )         
          ) {
            this.allMedicines.push(oneMedicine);
          } else if ( this.userSearchContent.length === 0 ) {
            this.allMedicines.push(oneMedicine);
          }

    });

  }

  showThisMedicineInfo(medicine){
    console.log(medicine);
  }


  deleteThisMedicineInfo(medicine){
    const patientUrl = `${this.serverUrl}/pharmacy/${medicine._id}`;

    this.http.delete(patientUrl).subscribe(
      (res) => { this.resetEverything(medicine); },
      (err) => { this.openSnackBar('Medicine deletion unsuccessful', 'Okay');  }
    );

  }

  updateThisMedicineInfo(medicine){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;

    dialogConfig.data = medicine;
    
    const dialogRef = this.dialog.open(AddMedicineComponent, dialogConfig);  

    dialogRef.afterClosed().subscribe( data =>{
      this.allMedicines = this.utils.allMedicines;
    });


  }

  resetEverything(medicine){
    this.utils.getAllMedicines();

    this.allMedicines.map( (oneMed,i) =>{
        if(oneMed._id == medicine._id){
            this.allMedicines.splice(i,1);
        }
    });

    this.openSnackBar('Medicine deleted successfully', 'Okay');
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  ngOnInit() {

  }



}

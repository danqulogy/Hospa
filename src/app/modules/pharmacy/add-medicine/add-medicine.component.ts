import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UtilsService } from '../../../utils.service';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  form: FormGroup;
  description: string;

  public medicineData;

  public medicineAdditionChoices = ['Add','Update'];
  public medicineAddition = this.medicineAdditionChoices[0];

  public medecineInformation = {
    'medicineName': '', // required
    'batchNumber' : '',
    'manufacturedBy' : '', // required
    'sellingPrice' : '', // required
    'soldOrNot' : '', // required
    'volume': '',
    'quantity': '',
    'expDate': '',
    'currency': ''
  }

  private serverUrl = this.utils.serverUrl;

  constructor(
    public snackBar: MatSnackBar,
    public utils: UtilsService,
    public http: Http,
    private dialogRef: MatDialogRef<AddMedicineComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
    this.medicineData = data;
  }

  ngOnInit() {
    this.setTheData();
  }

  setTheData(){

    if( this.medicineData !== null){
      this.medecineInformation =  this.medicineData;
      this.medicineAddition = this.medicineAdditionChoices[1];
    }else{
          this.medecineInformation = {
                  'medicineName': '', // required
                  'batchNumber' : '',
                  'manufacturedBy' : '', // required
                  'sellingPrice' : '', // required
                  'soldOrNot' : '', // required
                  'volume': '',
                  'quantity': '',
                  'expDate': '',
                  'currency': ''
                }
      this.medicineAddition = this.medicineAdditionChoices[0];

    }

  }

  public currencies = this.utils.allCurrencies;

  verifyData() {

    // if the oerson dosent  have a medicines name , the quatity in stock
        if (
          this.medecineInformation.medicineName !== '' &&
          this.medecineInformation.manufacturedBy !== '' &&
          this.medecineInformation.quantity !== '' &&
          this.medecineInformation.currency !== '' &&
          this.medecineInformation.sellingPrice !== ''
        ) {
          return true;
        } else {
          return false;
        }

    }

    sendThisInformation() {

          if ( this.verifyData() === true ) {

                if( this.medicineAddition == this.medicineAdditionChoices[0] ){
                  this.sendDataToBackend(this.medecineInformation);
                }else{
                  this.sendDataUpdateToBackend(this.medecineInformation);
                }

          } else if ( this.medecineInformation.medicineName === '' ) {
            this.openSnackBar('Please fill in medicine name', 'Okay');
          } else if ( this.medecineInformation.manufacturedBy === '' ) {
            this.openSnackBar('Please fill in manufacturer of medicine', 'Okay');
          } else if ( this.medecineInformation.quantity === '' ) {
            this.openSnackBar('Please fill in quantity of medicine', 'Okay');
          } else if ( this.medecineInformation.currency === '' ) {
            this.openSnackBar('Please fill in medicine selling currency', 'Okay');
          } else if ( this.medecineInformation.sellingPrice === '' ) {
            this.openSnackBar('Please fill in medicine selling price', 'Okay');
          }


    }


    sendDataToBackend(medecineInformation) {
      const patientUrl = `${this.serverUrl}/pharmacy`;

      this.http.post(patientUrl, medecineInformation).subscribe(
        (res) => { this.resetEverything('Storing of medicine data successfull', 'Okay');  },
        (err) => { this.resetEverything('Storing of data failed, please try again', 'Okay');  }
      );
    
    }

    sendDataUpdateToBackend(medicineInformation) {
      const patientUrl = `${this.serverUrl}/pharmacy/${medicineInformation._id}`;

      this.http.put(patientUrl, medicineInformation).subscribe(
        (res) => { this.resetEverything('Update of medicine data successfull', 'Okay');  },
        (err) => { this.resetEverything('Update of data failed, please try again', 'Okay');  }
      );
    
    }

    // we want it to be such that when user clicks on add medicine we push the data to the backend
    // then parent element says the medicine added successfull message

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    }


    resetEverything(message, okay) {
      this.utils.getAllMedicines(); 
      this.openSnackBar(message,okay);
      this.clearEverything();
      this.closeDialog();
    }

    closeDialog(){
      this.dialogRef.close( this.medecineInformation );
    }

    clearEverything() {
      
      this.medecineInformation = {
        'medicineName': '', // required
        'batchNumber' : '',
        'manufacturedBy' : '', // required
        'sellingPrice' : '', // required
        'soldOrNot' : '', // required
        'volume': '',
        'quantity': '',
        'expDate': '',
        'currency': ''
      }
    
    
    }




}

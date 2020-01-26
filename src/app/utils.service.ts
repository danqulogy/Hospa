import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Injectable()
export class UtilsService {

  private localServerUrl = 'http://localhost:3000';
  public serverUrl = this.localServerUrl;

  public allPatients = [];
  public allStaff = [];
  public allMedicines = [];

  public pageTitle: String = '';

  constructor(
    public snackBar: MatSnackBar,
    private http: Http,
  ) { }

  pushToCollection(data, where) {
      data.forEach(element => where.push(element) );
  };

  getAllPatient() {
    const getAllPatients =  `${this.serverUrl}/patient`;

    this.allPatients = [];

    this.http.get(getAllPatients ).subscribe(
      (res) => { this.pushToCollection(res.json(), this.allPatients);  },
      (err) => { this.openSnackBar('We could not get all patients, please check your internet connection', 'Okay'); }
    );

  }


  getAllStaff() {
    const getAllStaff =  `${this.serverUrl}/staff`;

    this.allStaff = [];

    this.http.get(getAllStaff).subscribe(
      (res) => { this.pushToCollection(res.json(), this.allStaff)  },
      (err) => { this.openSnackBar('We could not get all staff, please check your internet connection', 'Okay'); }
    );

  }


  getAllMedicines() {
    const getAllMedicines =  `${this.serverUrl}/pharmacy`;

    this.allMedicines = [];

    this.http.get(getAllMedicines).subscribe(
      (res) => { this.pushToCollection(res.json(), this.allMedicines)  },
      (err) => { this.openSnackBar('We could not get all medicines, please check your internet connection', 'Okay'); }
    );

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }

  openAddMedicine(){
  }

  allCurrencies = [
    {'name':'Dollars', 'symbol': '$'},
    {'name':'Ghana Cedis', 'symbol': 'GH¢'}
  ];

  allHospitalRoles = [
    {'name':'Admin', 'desc': 'A user with super access to all modules of the hospital'},
    {'name':'Doctor', 'desc': 'A general qualified health speacialist'},
    {'name':'Nurse', 'desc': 'A junior qualified health expert'}
  ];

}

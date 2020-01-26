import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../utils.service';
import { ExportComponent } from '../../helpers/export/export.component';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-export-petients-data',
  templateUrl: './export-petients-data.component.html',
  styleUrls: ['./export-petients-data.component.scss']
})
export class ExportPetientsDataComponent implements OnInit {

  public allPatientDetails = [];
  public userSearchContent: String = '';
 
  public options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    useBom: true,
    noDownload: true,
    headers: ['First Name', 'Last Name', 'ID']
  };


  constructor(
      public utils: UtilsService,
      private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.utils.getAllPatient();
    this.logTheInformationOut();
  }



  logTheInformationOut() {
    this.allPatientDetails = this.utils.allPatients;
    console.log('Be happy');
  }


  openDialog() {
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;

    // this.dialog.open(ExportComponent, dialogConfig);
  }

  exportAsExcelCsv() {
    // new Angular5Csv( this.renderedData,'Test Report', this.options );

  }

}

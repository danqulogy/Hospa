import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})

export class ExportComponent implements OnInit {

  constructor(
      public dialogRef: MatDialog
  ) {}

  ngOnInit() {
  }


  // save() {
  //   this.dialogRef.close();
  // }
  //
  // close() {
  //   this.dialogRef.close();
  // }

}

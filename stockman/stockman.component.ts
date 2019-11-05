import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { InsertComponent } from '../insert/insert.component';

@Component({
  selector: 'app-stockman',
  templateUrl: './stockman.component.html',
  styleUrls: ['./stockman.component.css']
})
export class StockmanComponent implements OnInit {

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  fetchdata = '';
  
  ngOnInit() {
      this.http.get('http://localhost/inventory/read.php').subscribe(
      data => {
          this.fetchdata = data as string;
          console.log('Data fetched is successful ', data);
      },
      error => {
          console.log('Error', error);
      }
  );
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data="show";
    this.dialog.afterAllClosed.subscribe(data=> this.ngOnInit());
    this.dialog.open(InsertComponent,dialogConfig);
  }

}

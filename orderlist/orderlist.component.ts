import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../upload.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  orderlist='';
  delForm: FormGroup;
  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private Upload:UploadService) { 
      this.createForm();
    }
  
    createForm() {
      this.delForm = this.fb.group({
        id: ['']
      })
    }
  

  ngOnInit() {
    this.http.get('http://localhost/inventory/readorder.php').subscribe(
      data => {
          this.orderlist = data as string;
          console.log('Data fetched is successful ', data);
      },
      error => {
          console.log('Error', error);
      });
  }
  Complete(id:number,data){
    data["id"]=id;
    this.Upload.DeleteOrder(data["id"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  orderForm: FormGroup;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private Upload:UploadService) {
      this.createForm();
  }

  fetchdata = '';
  

  createForm() {
    this.orderForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit() {
      this.http.get('http://localhost/inventory/readmenu.php').subscribe(
      data => {
          this.fetchdata = data as string;
          console.log('Data fetched is successful ', data);
      },
      error => {
          console.log('Error', error);
      });
  }
 
  tryOrder(name:number) {
    console.log('scope is ' + name);
    if(name!=0){
    this.Upload.PostOrder(name).then(value => {
      console.log(value);
      if(value=='1'){
        alert("The Item cannot be made please refill your inventory");  
      }
      else{
        alert("Order Placed Successfully");
      }
    });
    name=0;
  }
  }
}
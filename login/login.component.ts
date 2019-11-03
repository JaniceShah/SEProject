import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataForm: FormGroup;
  
  constructor(private frmbuilder: FormBuilder,
    private upload:UploadService,
    private router: Router) {
      this.createForm();
     }
createForm(){
    this.dataForm = this.frmbuilder.group({
    name: ['', Validators.required],
    pass: ['', Validators.required],
    });


}
  ngOnInit() {
  }
  Register(user) {
    console.log('scope is ' + user);
    this.upload.login(user).then(value => {
      console.log(value);
      if(value!=2){
      if(value=='1'){
        this.router.navigate(["manager"]);
      }
      else{
        this.router.navigate(["stock"]);
      }
    }
    });
  }
  
  signup() {
     this.router.navigate(["signup"]);
  }
  login(){
    this.router.navigate(["login"]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  dataForm: FormGroup;
  
  constructor(private frmbuilder: FormBuilder,
    private upload:UploadService,
    private router: Router) {
      this.dataForm = frmbuilder.group({
        name: ['', Validators.required],
        pass: ['', Validators.required],
        role: ['', Validators.required],
        });
    
     }

  ngOnInit() {
  }
  Register(user) {
    console.log('scope is ' + user);
    this.upload.Register(user);
    this.router.navigate(["dashboard"]);
  }

}

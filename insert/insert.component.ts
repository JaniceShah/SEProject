import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger,  style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators, EmailValidator} from '@angular/forms';
import * as XLSX from 'xlsx';
import { UploadService } from '../upload.service';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
  animations: [
    trigger('form', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class InsertComponent implements OnInit {
  dataForm: FormGroup;
  
  constructor(private http: HttpClient,
  private frmbuilder: FormBuilder,
  private upload:UploadService,
  private dialogRef: MatDialogRef<InsertComponent>,  @Inject(MAT_DIALOG_DATA) public info: string){
    this.dataForm = frmbuilder.group({
      Mid: ['', null],
      Name: ['', [Validators.required,Validators.maxLength(10)]],
      V_NV: ['V', Validators.required],
      Price: ['', Validators.required],
      });
  }

  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  
  
  ngOnInit() {
    console.log();
    }
    

 PostData(dataForm) {
    console.log(dataForm);
    console.log(typeof dataForm);
    this.upload.PostFoodList(dataForm);
    this.onClose();
  
  }
  onClose() {
    this.dialogRef.close({data:'data'});
  } 
}



import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  exform2: FormGroup;
  constructor(private fb:FormBuilder) { 
    let formControls={
      email:new FormControl('',[
        Validators.required,
        Validators.minLength(20),
        Validators.email
      ])
    }
    this.exform2=this.fb.group(formControls);
  }
  ngOnInit(): void {
  }
  get email(){
    return this.exform2.get('email') as FormControl
  }
  }

  



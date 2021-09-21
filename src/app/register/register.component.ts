import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  exform3:FormGroup
  constructor(private fb:FormBuilder) {
    let formControls={
      email:new FormControl('',[
        Validators.required,
        Validators.minLength(20),
        Validators.email
      ]),
      fullName:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      userName:new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    this.exform3=this.fb.group(formControls);
   }

  ngOnInit(): void {
  }
  get email(){
    return this.exform3.get('email') as FormControl
  }
  get password(){
    return this.exform3.get('password') as FormControl
  }
  get fullName(){
    return this.exform3.get('fullName') as FormControl
  }
  get userName(){
    return this.exform3.get('userName') as FormControl
  }

}

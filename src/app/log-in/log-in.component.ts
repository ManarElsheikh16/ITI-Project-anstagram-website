import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  exform: FormGroup;
  constructor(private fb:FormBuilder) { 
    let formControls={
      name:new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }
    this.exform=this.fb.group(formControls);
  }
  
  ngOnInit(): void {
  }

  get name(){
    return this.exform.get('name') as FormControl
  }
  get password(){
    return this.exform.get('password') as FormControl
  }

}

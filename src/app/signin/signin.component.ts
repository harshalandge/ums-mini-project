import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignService } from '../service/sign.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


constructor(private sign: SignService){ this.post()}
data:any

signinform=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  pwd:new FormControl('',[Validators.required,Validators.minLength(5)])
})


post(){
  this.sign.signinpostdata(this.signinform.value).subscribe(Response=>alert(Response))
}
}

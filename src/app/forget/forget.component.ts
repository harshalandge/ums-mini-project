import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ForgetService } from '../service/forget.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  constructor(private forgetPass:ForgetService){}

  pass=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.email])
  })

  getPassword(){
    this.forgetPass.getRegister(this.pass.value.emailId).subscribe(res=>alert(res))
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UnlockService } from '../service/unlock.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent {
 

  constructor(private unlk: UnlockService){}
  // data:any
  
  unlockform=new FormGroup({
    confirmPwd:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    newPwd:new FormControl('',[Validators.required,Validators.minLength(5)]),
    tempPwd:new FormControl('')
   
  })

  unlkpost(){
    this.unlk.unlockpostdata(this.unlockform.value).subscribe(Response=>alert(Response))
  }
}

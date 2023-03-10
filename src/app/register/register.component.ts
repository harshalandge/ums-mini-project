import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // regstr: any;
  countryOption:any
  stateOption:any
  cityOption:any
  // emailCheck:any
constructor(private reg:RegisterService){this.regpost()}
// data:any
regstrform=new FormGroup({
  cityId:new FormControl(''),
    countryId:new FormControl(''),
    dob:new FormControl(''),
    fname:new FormControl(''),
    gender:new FormControl(''),
    lname:new FormControl(''),
    phno:new FormControl('',[Validators.required,Validators.minLength(10)]),
    stateId:new FormControl(''),
  email:new FormControl('',[Validators.required,Validators.email])
})
 
  
  

regpost(){
  this.reg.regpostdata(this.regstrform.value).subscribe((Response)=>alert(Response))
}

getcountry(){
  this.reg.getcountriesdata().subscribe((Response)=>this.countryOption=Response)
  
}

getstate(countryId:number){
  this.reg.getstatedata(countryId).subscribe((res)=>this.stateOption=res)
}

getcity(stateId:number){
  this.reg.getcitydata(stateId).subscribe((res)=>{this.cityOption=res})
}

ngOnInit():void{
  this.getcountry();
  // this.getstate(this.countryOption);
  // this.getcity(this.stateOption)
}

emailhere:any
getemail(email:any){
  this.reg.getemaildata(email).subscribe((res)=>this.emailhere=res)
}






}

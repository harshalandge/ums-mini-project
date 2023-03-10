import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
data:any

  constructor(private register:HttpClient) { }

  baseurl='http://15.206.171.20:9090'


 regpostdata(body:any){
    return this.register.post(`${this.baseurl}/saveUser`,body,{responseType:'text'})
  }

  getcountriesdata(){
return this.register.get(`${this.baseurl}/countries`)
  }

  getstatedata(countryId:number){
return this.register.get(`${this.baseurl}/states/${countryId}`)
  }

  getcitydata(stateId:number){
return this.register.get(`${this.baseurl}/cities/${stateId}`)
  }

  getemaildata(email:any){
    return this.register.get(`${this.baseurl}/emailcheck/${email}`,{responseType:'text'})
      }

}

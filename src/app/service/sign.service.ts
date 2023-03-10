import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private sign:HttpClient) { }

  baseurl='http://15.206.171.20:9090'

 
  signinpostdata(body:any){
    return this.sign.post(`${this.baseurl}/login`,body,{responseType:'text'})
  }

}

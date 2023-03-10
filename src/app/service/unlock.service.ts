import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UnlockService {

  constructor(private unlock:HttpClient) { }

  baseurl:string='http://15.206.171.20:9090'

 

 unlockpostdata(body:any){
    return this.unlock.post(`${this.baseurl}/unlock`,body,{responseType:'text'})
  }

  
}

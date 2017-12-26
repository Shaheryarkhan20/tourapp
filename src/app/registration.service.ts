import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class RegistrationService {

  base_url = 'http://localhost:3000/users';
  constructor(private _http: Http) { }

  getData(){
     return this._http.get(this.base_url).map(data=> {
         console.log(data.json())
         return data.json()
     })
  }

}

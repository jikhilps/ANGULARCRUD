import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }



   GetAllCountryFromJSON()
  {
    return this.http.get("./assets/data.json");
  }
}

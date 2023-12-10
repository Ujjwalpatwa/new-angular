import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentloginService {

  constructor(private http :HttpClient) { }
  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
}

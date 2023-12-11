import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export const auth_header = 'authorization';


@Injectable({
  providedIn: 'root'
})
export class StudentloginService {
  
  constructor(private http :HttpClient) { }
  public studentloginmethod(id : any){
    
    return this.http.get(`http://localhost:8080/api/student/${id}`)
  }
  /*public loginUser(token: any,id:any){
    // in this way we store token from retun value from backend
    localStorage.setItem('token',token);
    localStorage.setItem('id',id)
    return true ;
  }
  

  //isLogin:user is login or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token')
    if(tokenStr==undefined||tokenStr==''|| tokenStr==null){
      return false;
    }else{
      return true;
    }
  }*/

  //logout:remove token from local stroage
  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
  public getbyid(id : any){
    return this.http.get(`http://localhost:8080/api/student/${id}`)
  }
  public updatestudentmethod(updateddata:any,custid:any){
    return this.http.put(`http://localhost:8080/api/student/update/${custid}`,updateddata)
  }
  public payfeemethod(payfeedata : any){
    return this.http.post("http://localhost:8080/api/student/payfee",payfeedata)
  }
  public leavemethod(leavedata : any){
    return this.http.post("http://localhost:8080/api/student/applyleave",leavedata)
  }
 /* public getToken(){
    return localStorage.getItem('token');

}
public getId(){
  return localStorage.getItem('id')
}*/
 
}

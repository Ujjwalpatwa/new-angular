import { Component, OnInit } from '@angular/core';
import { StudentloginService } from '../../service/studentlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrl: './studentdash.component.css'
})
export class StudentdashComponent implements OnInit{
  userdata :any
  id : any
  constructor(private studentlogin : StudentloginService, private router :Router){}
  ngOnInit() {
   this.id= localStorage.getItem('id')
    this.studentlogin.studentloginmethod(this.id).subscribe((data)=>{
      this.userdata=data
      console.log(data);
    })
  }
  
  updatestudent(id:any){
    this.router.navigateByUrl('/update/${id}')
  }
  logout(){
    this.studentlogin.logout();
    this.router.navigateByUrl('/login')
  } 
}

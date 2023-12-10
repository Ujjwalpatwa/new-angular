import { Component } from '@angular/core';
import { AdminloginService } from '../../service/adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrl: './addteacher.component.css'
})
export class AddteacherComponent {
 teacherdata ={
  name:'',
  gender:'',
  department:'',
  qualification:'',
  address:'',
  user :{
    id : ''
  }
 }

 constructor(private teacherpost : AdminloginService,private router : Router){}
 onSubmit(){
  this.teacherdata.user.id=JSON.parse(localStorage.getItem('id') || '{}');
  this.teacherpost.teachermethod(this.teacherdata).subscribe((data2:any)=>{
    console.log(data2);
  })
  this.router.navigateByUrl('/welcome')
}
}

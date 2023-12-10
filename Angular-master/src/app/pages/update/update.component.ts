import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentloginService } from '../../service/studentlogin.service';
import { getHeapSnapshot } from 'v8';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  studentdata ={
    name:'',
    email:'',
    password:'',
   
    mobileNumber:'',
    address:'',
    gender:'',
    user :{
      id : ''
    }
  }
  constructor(private router : Router, private updatestudent : StudentloginService, private route :ActivatedRoute){}

  datauser : any
  id : any
  ngOnInit() {
    this.id=localStorage.getItem('id')
   // this.id = this.route.snapshot.params['custid']
    console.log(this.id)
    this.updatestudent.getbyid(this.id).subscribe((data)=>{
    this.datauser=data
    console.log(data)
    this.studentdata.name=this.datauser.name
    this.studentdata.email=this.datauser.email
    this.studentdata.password=this.datauser.password
    this.studentdata.mobileNumber=this.datauser.mobileNumber
    this.studentdata.address=this.datauser.address
    this.studentdata.gender=this.datauser.gender
   })
   
  }
  formsubmit(){
    this.updatestudent.updatestudentmethod(this.studentdata,this.id).subscribe((data3:any)=>{
      console.log(data3);
    })
  }
  back(){
    this.router.navigateByUrl('/studentdash')
  }
}

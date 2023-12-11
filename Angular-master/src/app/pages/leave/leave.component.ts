import { Component } from '@angular/core';
import { StudentloginService } from '../../service/studentlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.css'
})
export class LeaveComponent {
  leave = {
    leaveId:'',
    subject:'',
    body:''
  }

  constructor(private leavedata : StudentloginService, private router: Router){}

  onsubmit(){
    this.leavedata.leavemethod(this.leave).subscribe((data5:any)=>{
      console.log(data5);
    })
    this.router.navigateByUrl('/studentdash')
  }

}

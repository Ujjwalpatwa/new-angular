import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentloginService } from '../../service/studentlogin.service';

@Component({
  selector: 'app-feepayment',
  templateUrl: './feepayment.component.html',
  styleUrl: './feepayment.component.css'
})
export class FeepaymentComponent {
  studentfee = {
    month:'',
    givenBy:'',
    amount:'',
    description:''
  }

  constructor(private studentfeesdata : StudentloginService, private router :Router){}
  onsubmit(){
    this.studentfeesdata.payfeemethod(this.studentfee).subscribe((data4:any)=>{
      console.log(data4);
    })
    this.router.navigateByUrl('/studentdash')
  }
}

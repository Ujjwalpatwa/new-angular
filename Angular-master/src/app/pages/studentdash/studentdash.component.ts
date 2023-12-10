import { Component } from '@angular/core';
import { StudentloginService } from '../../service/studentlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdash',
  templateUrl: './studentdash.component.html',
  styleUrl: './studentdash.component.css'
})
export class StudentdashComponent {
  constructor(private studentlogin : StudentloginService, private router :Router){}
 logout(){
  this.studentlogin.logout();
  this.router.navigateByUrl('/login')
} 
}

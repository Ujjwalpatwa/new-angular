import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AddstudentComponent } from './pages/addstudent/addstudent.component';
import { AddteacherComponent } from './pages/addteacher/addteacher.component';
import { StudentdashComponent } from './pages/studentdash/studentdash.component';
import { UpdateComponent } from './pages/update/update.component';
import { FeepaymentComponent } from './pages/feepayment/feepayment.component';
import { LeaveComponent } from './pages/leave/leave.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'welcome',
    component:WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path:'addstudent',
    component:AddstudentComponent,
    pathMatch: 'full'
  },
  {
    path:'addteacher',
    component:AddteacherComponent,
    pathMatch: 'full'
  },
  {
    path :'studentdash',
    component :StudentdashComponent,
    pathMatch: 'full'
  },
  {
    path :'update/:studentId',
    component :UpdateComponent,
    pathMatch: 'full'
  },
  {
    path :'feepayment',
    component : FeepaymentComponent,
    pathMatch: 'full'
  },
  {
    path : 'leave',
    component : LeaveComponent,
    pathMatch : 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

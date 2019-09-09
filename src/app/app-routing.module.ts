import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperSignupComponent } from './stepper-signup/stepper-signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'signup',component:StepperSignupComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[StepperSignupComponent,LoginComponent,HomeComponent];
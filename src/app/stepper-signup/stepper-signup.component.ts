import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-stepper-signup',
  templateUrl: './stepper-signup.component.html',
  styleUrls: ['./stepper-signup.component.css']
})
export class StepperSignupComponent implements OnInit {

  constructor() { }
usermodel = new User('','','',0,'','','','');
  ngOnInit() {
  }
test(){
  console.log(this.usermodel.addressline1 +""+ this.usermodel.postalcode);
}
}

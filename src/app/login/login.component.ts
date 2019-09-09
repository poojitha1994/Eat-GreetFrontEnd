import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
usermodel= new User('','','',0,'','','','');
  ngOnInit() {
  }
test(){
  console.log(this.usermodel.email+ ""+ this.usermodel.password);
}

}

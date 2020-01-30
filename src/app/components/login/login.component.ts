import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/user';
import { EnrollmentService } from '../../enrollment.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public emailtxt:string="ibrahimghazaly88@gmail.com";
public passwordtxt:string="ig141993";
  constructor(private login:EnrollmentService) { }

  ngOnInit() {  }

  onlogin(){
const usersignin={
  email:this.emailtxt,
  password:this.passwordtxt
}


this.login.loginuser(usersignin).subscribe(
  response => console.log('Success!', response),
  error => console.log('error',error)


)}


}

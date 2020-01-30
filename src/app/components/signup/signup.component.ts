import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { EnrollmentService } from '../../enrollment.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private register:EnrollmentService){}
    
   
  userModel=new
  User ('Ibrahim','111256','ibrahimghazaly88@gmail.com','123456123456')

  onSubmit(){

    this.register.enroll(this.userModel).subscribe(
      response => console.log('Success!', response),
      error => console.log('error',error)
      )
      }


  ngOnInit() {
  }

}

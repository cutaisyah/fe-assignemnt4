import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
    test : Date = new Date();
    focus;
    focus1;
    user : any;
    signUpForm : FormGroup ;
    constructor( public fb : FormBuilder,public userService : UserService) {
    this.signUpForm = new FormGroup({
      email : new FormControl,
      password : new FormControl,

        username:new FormControl,
        birthdate:new FormControl,
        phone:new FormControl,
        roles:new FormControl,
        districts:new FormControl,
    })
  }

  ngOnInit(): void {
  }

  signUp() {
    this.user = this.signUpForm.value;
    console.log(this.user)
      this.userService.signUp(this.user)
  }

}

import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  userData: User;
  test: Date = new Date();
  focus;
  focus1;
  user: any;
  signUpForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    private route: ActivatedRoute
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

      username: new FormControl(),
      birthdate: new FormControl(),
      phone: new FormControl(),
      roles: new FormControl(),
      districts: new FormControl(),
    });
  }

  ngOnInit(): void {}

  getDataUser() {}
}

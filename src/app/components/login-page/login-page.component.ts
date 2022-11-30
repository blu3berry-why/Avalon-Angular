import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  constructor(
    private testService: TestService,
    private authService: AuthService,
    private router: Router
  ){}

  user : User = {
    username: "",
    password: "",
    email: "",
    friends: []
  }

  ngOnInit(): void {
    this.authService.login({
      "username": "newUser1235",
      "password": "jelszo123",
      "email": "example@ex.com",
      "friends": [
      ]
    }).subscribe(res => {this.getTest()})

  }

  test : string = "waiting"

  getTest() {
    this.testService.test().subscribe((res) => (this.test = res?.message));
  }

  login(){
    console.log(this.user)
    this.authService.login(this.user).subscribe(res => {
      this.router.navigate(["home"])
    })
  }
}

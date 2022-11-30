import { Component } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  user : User = {
    username: "",
    password: "",
    email: "",
    friends: []
  }

  register(){
    
  }

}

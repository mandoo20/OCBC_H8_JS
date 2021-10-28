import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  currentUser:{
    isLogin: boolean,
    username: string,
    password: string
  } = {isLogin:false,username: '', password: ''}

    loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      passsword: new FormControl('')
    })

    isSubmitted = false;

    get username() {
      return this.loginForm.get('username');
    }
    get password() {
      return this.loginForm.get('password');
    }

    handleIsSubmittedState () {
      if(this.isSubmitted === true)
        this.isSubmitted = false
    }

  onLogin() {
    console.log(this.loginForm.get('username'))
    console.log(this.loginForm.get('password'))
    this.isSubmitted= true;
    this.currentUser = {
      isLogin:true,
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder, FormGroup} from '@angular/forms';

import { forbiddenNameValidator } from './validate-usename';
import { PasswordValidator } from './validate-password';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }
  isHiddenPass : boolean;
  
  isSubmitted : false;
  switchPasswordField(){
    this.isHiddenPass = !this.isHiddenPass;
  }

  login = this.fb.group({
    userName : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    
  }, {Validator : PasswordValidator});
  ngOnInit(): void {
  }
  get formControls() { return this.login.controls; }
  onLogin(){
    console.log(this.login.value);
    
    if(this.login.invalid){
      return;
    }
    this.authService.login(this.login.value);
    this.router.navigateByUrl('/users');
  }
}

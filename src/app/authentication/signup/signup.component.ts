import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {User} from '../models/user';
import { AuthService } from '../services/auth.service';
import {passwordMatchValidator} from '../../shared/validators/password-match';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  model:User;
  title:string;

  constructor(
    private fb:FormBuilder,
    private router:Router, 
    private authservice :AuthService
    ) { }

  ngOnInit(): void {
    this.title = "Create An Account"
    this.createForm();
  }
  createForm() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passconf: ['', Validators. required],
      first_name: ['', Validators.required],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]]
    }, { validators: passwordMatchValidator })
  }

  get f() { return this.signupForm.controls }

  onSubmit() {
    this.model = this.signupForm.value;
    console.log(this.model);
    this.authservice.signup(this.model).subscribe(
      result => {
        console.log(result);
        if( ! result.error) {
          this.router.navigateByUrl('/auth/login');
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isSubmit = false;
  private returnUrl: string;
  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z ]*')]],
      rememberMe: ['',],
    });
    this.loginForm.patchValue({
      email: 'ranjit@gmail.com',
      password: '',
      rememberMe: true
    });
  }
  login() {
    console.log(this.loginForm);
    // this.CommonApiCallService.get("/posts").subscribe(data => {
    //   console.log(data);
    // });
  }

}

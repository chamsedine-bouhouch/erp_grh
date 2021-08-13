import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthStateService} from '../../shared/auth-state.service';
import {TokenService} from '../../shared/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    }
    );
  };

  ngOnInit() { }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      result => {
        console.log(result);
      },
      error => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    )
  }

}

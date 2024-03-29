import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  notifiacation: any = '';
  isLoading: boolean = false;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthenticationService, private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.validateform();
  }

  /**
   * event
   */
  validateform() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get formControls() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.formControls['userName'].value);
    this.authService.
      authenticate(this.formControls['userName'].value, this.formControls['password'].value)
      .subscribe(() => this.router.navigateByUrl('/home'), 
      error => {
        console.log(error);
        if (error.defaultMessage)
          this.openSnackBar(`${error.field} ${error.defaultMessage}`, '');
        else if (error)
          this.openSnackBar(error, '');
        console.log(error);
      });
  }

  /**
   * ui ux 
   */

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


}


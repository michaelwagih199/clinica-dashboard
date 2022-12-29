import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  notifiacation: any = '';
  isLoading: boolean = false;
  validateForm!: FormGroup;
  userName: any;
  password: any;

  constructor(
    private authService: AuthenticationService, private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.validateform();

  }

  /**
   * event
   */

  onLogin() {
    const x = this.authService.authenticate('SuperAdmin', 'SuperAdmin');
    console.log("kjfvnk");
    
  }


  validateform() {


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

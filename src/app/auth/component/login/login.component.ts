import { Component, OnInit } from '@angular/core';
import { FormGroup  } from '@angular/forms';


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
  
  ) {}

  ngOnInit(): void {
    this.validateform();
  }

  /**
   * event
   */

  onLogin() {
  
  }

  validateform() {
   
  }

}

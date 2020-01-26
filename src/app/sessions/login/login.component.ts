import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  login() {

          if (this.credentials.email !== '' && this.credentials.password !== '') {

              this.auth.login(this.credentials).subscribe(
                (res) => {
                localStorage.setItem('token', res.json().token );
                this.router.navigateByUrl('/dashboard');
              }, (err) => {
                this.openSnackBar('Sorry your cridentials are wrong, please try again', 'Okay');
              });

        } else {

              if (this.credentials.email === '') {
                this.openSnackBar('Please fill in your username', 'Okay');
              } else if (this.credentials.password === '') {
                this.openSnackBar('Please fill in your password', 'Okay');
              }

        }

  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }


}

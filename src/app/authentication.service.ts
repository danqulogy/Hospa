import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// user details type checking
export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}


@Injectable()
export class AuthenticationService {

        // api related variables
        public devApiUrl = 'http://localhost:3000';
        public apiServerUrl = this.devApiUrl;
        private token: string;

        public UserDetails: Object;


        // dependencies
        constructor(
          private http: Http,
          private router: Router
        ) { }


        // save the token
        private saveToken(token: string): void {
          localStorage.setItem('token', token);
          this.token = token;
        }

        // get the token
        private getToken(): string {
          if (!this.token) {
            this.token = localStorage.getItem('token');
          }
          return this.token;
        }

        // clean the token
        public logout(): void {
          this.token = '';
          localStorage.removeItem('token');
          this.router.navigateByUrl('/');
        }


        // get UserDetails
        public getUserDetails(): UserDetails {
          const token = this.getToken();
          let payload;
          if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);

            this.UserDetails = JSON.parse(payload);
            return JSON.parse(payload);
          } else {
            return null;
          }
        }

        // check whether user is logged in
        public isLoggedIn(): boolean {
          const user = this.getUserDetails();
          if (user) {
            return user.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }

        // request headers
        public returnRequestOptions() {
          const requestOptions = new RequestOptions();
          requestOptions.headers = this.returnHeaders();

          return requestOptions;
        }

        // request headers
        public returnHeaders() {
          const headers = new Headers();
          headers.append( 'Authorization', `Bearer ${ this.getToken() }`  );
          return headers;
        }

        // dynamic request function
        private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
          let base;

          if (method === 'post') {
            base = this.http.post(`${this.apiServerUrl}/user/${type}`, user);
          } else {
            base = this.http.get(`${this.apiServerUrl}/user/${type}`, this.returnRequestOptions() );
          }

          const request = base.pipe(
            map((data: TokenResponse) => {
              if (data.token) {
                this.saveToken(data.token);
              }
              return data;
            })
          );

          return request;
        }


        // api call to register
        public register(user: TokenPayload): Observable<any> {
          return this.request('post', 'register', user);
        }

        // api call to login
        public login(user: TokenPayload): Observable<any> {
          return this.request('post', 'login', user);
        }

        // api call to get users profile
        public profile(): Observable<any> {
          return this.request('get', 'profile');
        }

}

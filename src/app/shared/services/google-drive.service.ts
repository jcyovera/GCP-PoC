import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  public static SESSION_STORAGE_KEY = 'accessToken';
    private user: GoogleUser;

    constructor(private googleAuth: GoogleAuthService) {
    }

    public getToken(): string {
        const token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error('no token set , authentication required');
        }
        return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    }

    public signIn(): void {
        this.googleAuth.getAuth()
            .subscribe((auth) => {
                auth.signIn().then(res => this.signInSuccessHandler(res));
            });
    }

    private signInSuccessHandler(res: GoogleUser) {
            this.user = res;
            console.log(res);
            sessionStorage.setItem(
                UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
            );
        }
    public isUserSignedIn(): boolean {
          return !_.isEmpty(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
      }
}

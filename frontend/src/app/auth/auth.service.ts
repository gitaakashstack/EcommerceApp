import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, tap, catchError, throwError, switchMap } from "rxjs";
import { LocalStorageService } from "../shared/services/local-storage.service";
import { AuthTokens } from "./models/auth-tokens.model";
import { UserInfo } from "./models/user-info.model";
import { genders, locations, User } from "./user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    private readonly origin = 'http://localhost:4000';

    //user subject shouldn't be accessible outside this service
    private userSubj = new BehaviorSubject<UserInfo | null>(null);
    public authToken!: string;
    private expirationTimerId!: ReturnType<typeof setTimeout> | null;

    constructor(private http: HttpClient, private router: Router, private localStorage: LocalStorageService) { }

    //components using this dependency shouldn't be allowed to make changes to user by using .next()
    get user$(): Observable<UserInfo | null> {
        return this.userSubj.asObservable();
    }

    //* returning a new object so that the original auth tokens could not altered
    // get authTokenData(): AuthTokens {
    //     return { ...this.authTokens };
    // }

    postUserData(userData: any = {}) {
        console.log('post data --- ', userData)
        return this.http.post(this.origin + '/auth/register', userData).subscribe({
            next: responseData => {
                this.router.navigate(['log-in']);
                console.log(responseData)
            }
        });
    }

    loginUser(email: string, password: string) {
        const userCred = { email, password }
        //TODO only if a 200 response is returned, we should login and store the user data in user subject
        return this.http.post<AuthTokens>(this.origin + '/auth/log-in', userCred, { headers: { skip: 'true' } })
            .pipe(
                catchError((errorResponse, caught) => {
                    console.log(errorResponse);
                    return throwError(() => new Error(errorResponse.error.message));
                }),
                tap((responseData) => {
                    const tokenExpirationTime = Date.now() + responseData.expires_in;
                    this.localStorage.storeItem('access_token', responseData.access_token);
                    this.localStorage.storeItem('expires_at', tokenExpirationTime);
                    this.localStorage.storeItem('refresh_token', responseData.refresh_token);
                    this.authToken = responseData.access_token;
                    this.setExpirationTimer(responseData.expires_in);
                }),
                switchMap(val => {
                    return this.getUserInfo();
                })
            )
    }

    autoLogin() {
        const accessToken = this.localStorage.getItems('access_token');
        const expiresAt = parseInt(this.localStorage.getItems('expires_at') as string);
        this.authToken = accessToken;
        console.log(accessToken, expiresAt, 'asdsad');

        if (!accessToken)
            return;

        if (Date.now() >= expiresAt)
            return;
        const userInfo: UserInfo = this.localStorage.getItems('user');
        this.userSubj.next(userInfo);
        // this.getUserInfo();
        const timeoutDuration = expiresAt - Date.now();
        this.setExpirationTimer(timeoutDuration);
    }

    autoLogout() {
        this.localStorage.clearItems();
        this.userSubj.next(null);

        //* If Logout button is clicked, then timeout is under process
        if (this.expirationTimerId)
            clearTimeout(this.expirationTimerId);

        this.expirationTimerId = null;
    }

    private getUserInfo() {
        return this.http.get<UserInfo>(this.origin + '/auth/userinfo')
            .pipe(
                tap(responseData => {
                    this.userSubj.next(responseData);
                    this.localStorage.storeItem('user', responseData);
                })
            )
    }

    private setExpirationTimer(timeout: number) {
        this.expirationTimerId = setTimeout(() => {
            this.autoLogout();
        }, timeout);
    }


}

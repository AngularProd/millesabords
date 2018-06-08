import { Users } from './../_models/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(url: string) {
        return this.http.get(url);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('accesUtilisateur');
    }
}

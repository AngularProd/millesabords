import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
declare function require(path: string): any;
var sha1 = require("sha1");
import 'rxjs/add/operator/map';
import { urlApi } from '../config/host';

@Component({
    // selector: 'app-login',
    moduleId: module.id.toString(),
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {

    }

    ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        //this.model.pseudo, this.model.password
        this.loading = true;
        let url = urlApi + '/utilisateur/' + this.model.pseudo;
        this.authenticationService.login(url)
            .subscribe(
                data => {
                    let idtf = sha1(data['id']);
                    let access = sha1(this.model.password) == data['password'];
                    if ( access ) {
                        localStorage.setItem('infosUtilisateur', JSON.stringify({'user': data}));
                        this.router.navigate([this.returnUrl]);                    
                    } else {
                        this.alertService.error('Erreur de mot de passe');
                        this.loading = false;
                    }
                    return false;
                },
                error => {
                    this.alertService.error(error.error.message);
                    this.loading = false;
                }
            );
    }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AlertService } from '../_services';
import { UsersService } from '../_services/table/users.service';

@Component({
  // selector: 'app-register',
  moduleId: module.id.toString(),
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private usersService: UsersService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.usersService.create(this.model)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}

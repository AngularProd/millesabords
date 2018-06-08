import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

	user;

	constructor() { }

	ngOnInit() {
		let user = JSON.parse(localStorage.getItem('infosUtilisateur'));
		this.user = user.user;
	}

	menuShowHide() {
		$("body").toggleClass("show-sidebar");
	}

}

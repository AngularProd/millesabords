import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

	currentYear:any;

	constructor() { }

	ngOnInit() {
		let date = new Date();
		this.currentYear = date.getFullYear();  	
	}

}

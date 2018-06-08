import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {

	currentYear;

	constructor() { }

	ngOnInit() {
		let date = new Date();
		this.currentYear = date.getFullYear();  	
	}

}
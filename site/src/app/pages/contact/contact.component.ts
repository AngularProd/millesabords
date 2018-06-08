import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	lat: number = 42.577;
	lng: number = 8.835;

	constructor() { }

	ngOnInit() {
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	lat: number = 42.6030003;
	lng: number = 8.8269004;
	zoom: number = 15;

	constructor() { }

	ngOnInit() {
	}

}

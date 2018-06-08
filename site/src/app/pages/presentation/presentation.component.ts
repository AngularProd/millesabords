import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
	selector: 'app-presentation',
	templateUrl: './presentation.component.html',
	styleUrls: [
		'./presentation.component.css',
		'./fonts-googleapis-component.css'
	]
})
export class PresentationComponent implements OnInit {


	constructor(
		private http: Http
	) { }

	ngOnInit() {		
	}

}

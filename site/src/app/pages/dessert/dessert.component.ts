import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.css']
})
export class DessertComponent implements OnInit {

	desserts;
	dessertsCharger = false;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
		let url = urlApi + '/dessert';
		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.desserts = data;
					this.dessertsCharger = (data.length > 0) ? true : false;

				}
			);			
	}

}

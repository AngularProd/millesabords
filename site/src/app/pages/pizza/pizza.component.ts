import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

	pizzas;
	pizzasCharger = false;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
		let url = urlApi + '/pizza';
		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.pizzas = data;
					this.pizzasCharger = (data.length > 0) ? true : false;
				}
			);			
	}

}

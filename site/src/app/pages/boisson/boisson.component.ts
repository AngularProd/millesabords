import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

	boissons;
	boissonsCharger = false;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
		let url = urlApi + '/boisson';
		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.boissons = data;
					this.boissonsCharger = (data.length > 0) ? true : false;
				}
			);			
	}

}

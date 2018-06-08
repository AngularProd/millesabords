import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {

	plats;
	platsCharger = false;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
		let url = urlApi + '/plat';
		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.plats = data;
					this.platsCharger = (data.length > 0) ? true : false;
				}
			);			
	}

}

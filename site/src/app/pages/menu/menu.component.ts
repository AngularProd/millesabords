import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class menuComponent implements OnInit {

	menus;
	menusCharger = false;

	constructor(
		private http: Http
	) { }

	ngOnInit() {
		let url = urlApi + '/menu';
		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.menus = data;
					this.menusCharger = (data.length > 0) ? true : false;
				}
			);			
	}

}

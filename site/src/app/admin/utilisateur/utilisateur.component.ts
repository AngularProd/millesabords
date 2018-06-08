import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

	utilisateurs;
	utilisateursCharger = false;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		let url = urlApi + '/utilisateurs';

		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.utilisateurs = data;
					this.utilisateursCharger = (data.length > 0) ? true : false;
				}
			)  	
	}	

}

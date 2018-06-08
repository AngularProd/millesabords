import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../../config/host';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutPizzaComponent implements OnInit {

	constructor(
		private http: Http,
		private router: Router
		) { }

	ngOnInit() {
	}

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}
		let url = urlApi + '/pizza';
		this.http.post(
			url, 
			data
		).subscribe(
			res => {
				this.router.navigate(['/admin/pizza/insert']);
			},
			err => {
				console.log(err);
				alert('Le pizza ' + data.nom + ' existe déjà');
			}
		);      
	}

	validationFomulaire(data) {
		let message = '';
		if ( data.nom === '' ) message = 'Le champ nom ne doit pas être vide';
		if ( data.pm === '' ) message = 'Le champ prix ne doit pas être vide';
		if ( data.gm === '' ) data.gm = '-';
		if ( data.ingredient === '' ) message = 'Le champ ingredient ne doit pas être vide';

		if ( message != '' ) return message;

		return false; 
	}

}

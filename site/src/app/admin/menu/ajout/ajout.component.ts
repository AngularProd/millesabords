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
export class AjoutMenuComponent implements OnInit {

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
		let url = urlApi + '/menu';
		this.http.post(
			url,
			data
		).subscribe(
			res => {
				this.router.navigate(['/admin/menu/insert']);
			},
			err => {
				alert('Le menu ' + data.nom + ' existe déjà');
			}
		);      
	}

	validationFomulaire(data) {
		let message = '';
		if ( data.nom === '' ) message = 'Le champ Nom du menu  ne doit pas être vide';
		if ( data.prix === '' ) message = 'Le champ Prix ne doit pas être vide';
		if ( data.ingredient === '' ) data.ingredient = '-';

		if ( message != '' ) return message;

		return false; 
	}

}

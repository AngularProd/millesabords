import { Component, OnInit } from '@angular/core';
import { urlApi } from '../../../config/host';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {

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
		let url = urlApi + '/utilisateur';
		this.http.post(
			url,
			data
		).subscribe(
			res => {
				this.router.navigate(['/admin/utilisateur']);
			},
			err => {
				alert('Ce pseudo ' + data.pseudo + ' est déjà utilisé');
			}
		);      
	}

	validationFomulaire(data) {
		let message = '';
		if ( data.password === '' ) message = 'Le champ password ne doit pas être vide';
		if ( data.role === '' ) message = 'Le champ role ne doit pas être vide';
		if ( data.prenom === '' ) message = 'Le champ prenom ne doit pas être vide';
		if ( data.nom === '' ) message = 'Le champ nom ne doit pas être vide';
		if ( data.email === '' ) message = 'Le champ email ne doit pas être vide';
		if ( data.pseudo === '' ) message = 'Le champ pseudo ne doit pas être vide';

		if ( message != '' ) return message;

		return false;
	}

}

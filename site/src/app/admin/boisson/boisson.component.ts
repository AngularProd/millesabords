import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../config/host';
import { Observable } from 'rxjs/Observable';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css']
})
export class BoissonComponent implements OnInit {

	boissons;
	insertOrList;
	deleted;
	modified
	idBoissonTodelete;
	boissonsCharger = false;
	boissonToModifier = false;

	headers: Headers;
    options: RequestOptions;	

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private router: Router,
		public ngxSmartModalService: NgxSmartModalService
	) { }

	ngOnInit() {
		console.log(this.route.snapshot.params);
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;
		this.modified = (this.route.snapshot.params.insertOrList == 'modified') ? true : false;

		console.log(this.deleted);		

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
			)  	
	}

	supprimerBoisson(boisson) {
		this.idBoissonTodelete = boisson.id;
	}	

	modifierBoisson(boisson) {
		this.boissonToModifier = boisson;
	}

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}

		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: cpHeaders });

		let url = urlApi + '/boisson/' + data.id;
		
		let dataToPut = {
			nom       : data.nom,
			pm 		  : data.pm,
			gm 		  : data.gm
		}

		let body = JSON.stringify(dataToPut);
		this.http.put(
			url,
			body,
			options
		).subscribe(
			res => {
				this.ngxSmartModalService.closeLatestModal();
				this.router.navigate(['/admin/deleteboisson/simple_recharge']);
			},
			err => {
				console.log(err);
				alert('Une erreur est survenue lors de la mise à jour');
			}
		);		
	}

    private extractData(res: Response) {
    	console.log('extractData');
        let body = res.json();
    	console.log(body);
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }    

	validationFomulaire(data) {
		let message = '';
		if ( data.nom === '' ) message = 'Le champ nom ne doit pas être vide';
		if ( data.pm === '' ) message = 'Le prix pour le 33cl ne doit pas être vide';
		if ( data.gm === '' ) message = 'Le prix pour le 50cl ne doit pas être vide';

		if ( message != '' ) return message;

		return false; 
	}

}

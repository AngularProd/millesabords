import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../config/host';
import { Observable } from 'rxjs/Observable';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

	desserts;
	insertOrList;
	deleted;
	modified
	idDessertTodelete;
	dessertsCharger = false;
	dessertToModifier = false;

	headers: Headers;
    options: RequestOptions;	

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private router: Router,
		public ngxSmartModalService: NgxSmartModalService
	) { 
		this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
	}

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;	
		this.modified = (this.route.snapshot.params.insertOrList == 'modified') ? true : false;	

		let url = urlApi + '/dessert';

		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					console.log(data);
					this.desserts = data;
					this.dessertsCharger = (data.length > 0) ? true : false;
				}
			)  	
	}

	supprimerDessert(desser) {
		this.idDessertTodelete = desser.id;
	}	

	modifierDessert(dessert) {
		this.dessertToModifier = dessert;
	}

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}

		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: cpHeaders });

    	let dataToPut = {
			nom       : data.nom,
			prix	  : data.prix,
			ingredient: data.ingredient
		}
		let body = JSON.stringify(dataToPut);

		let url = urlApi + '/dessert/' + data.id;
		console.log(this.headers);
		return this.http.put(
			url,
			body,
			options
		).subscribe(
			res => {
				this.ngxSmartModalService.closeLatestModal();
				this.router.navigate(['/admin/deletedessert/simple_recharge']);
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
		if ( data.prix === '' ) message = 'Le champ prix ne doit pas être vide';
		if ( data.ingredient === '' ) data.ingredient = '-';

		if ( message != '' ) return message;

		return false; 
	}

}

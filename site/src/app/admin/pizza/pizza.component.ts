import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../config/host';
import { Observable } from 'rxjs/Observable';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
	selector: 'app-pizza',
	templateUrl: './pizza.component.html',
	styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

	pizzas;
	insertOrList;
	deleted;
	modified;
	idPizzaTodelete;
	pizzaCharger = false;
	pizzaToModifier = false;
	paginate:Array<number>;

	headers: Headers;
    options: RequestOptions;	

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private router: Router,
		public ngxSmartModalService: NgxSmartModalService
	) { }

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;
		this.modified = (this.route.snapshot.params.insertOrList == 'modified') ? true : false;

		let url = urlApi + '/pizza';

		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.pizzas = data.contain;
					this.pizzaCharger = (data.contain.length > 0) ? true : false;
					let page = [];
					for (var i = 1; i <= Math.ceil(data.count / 5); ++i) {
						page.push(i);
					}
					this.paginate = page;
					console.log(data, page, this.paginate);
				}
			)  	
	}

	/**
	 * Pagination request
	 *
	 * @param page offset from where to show
	 *
	 * @return void
	*/
	pagination(page:number) {
		let limits:number = 5;
		this.pizzaCharger = false;
		this.http.get(urlApi + '/pizza/' + page + "/" + limits)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.pizzas = data.contain;
					this.pizzaCharger = (data.contain.length > 0) ? true : false;
					let page = [];
					for (var i = 1; i <= Math.ceil(data.count / limits); ++i) {
						page.push(i);
					}
					this.paginate = page;
					console.log(data, page, this.paginate);
				}
			)  	
	}

	supprimerPizza(pizza) {
		this.idPizzaTodelete = pizza.id;
	}	

	modifierPizza(pizza) {
		this.pizzaToModifier = pizza;
	}

	onClickSubmit(data) {
		let messageErreur = this.validationFomulaire(data);
		if ( messageErreur ) {
			alert(messageErreur);
			return false;
		}

		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: cpHeaders });

		let url = urlApi + '/pizza/' + data.id;
		
		let dataToPut = {
			nom       	: data.nom,
			pm 			: data.pm,
			gm 			: data.gm,
			ingredient 	: data.ingredient
		}

		let body = JSON.stringify(dataToPut);
		this.http.put(
			url,
			body,
			options
		).subscribe(
			res => {
				this.ngxSmartModalService.closeLatestModal();
				this.router.navigate(['/admin/deletepizza/simple_recharge']);
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
		if ( data.pm === '' ) message = 'Le champ prix ne doit pas être vide';
		if ( data.gm === '' ) data.gm = '-';
		if ( data.ingredient === '' ) message = 'Le champ ingredient ne doit pas être vide';

		if ( message != '' ) return message;

		return false; 
	}

}

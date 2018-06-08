import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { urlApi } from '../../config/host';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

	menus;
	insertOrList;
	deleted;
	modified;
	idMenuTodelete;
	menusCharger = false;
	menuToModifier = false;

    headers: Headers;
    options: RequestOptions;	

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		public ngxSmartModalService: NgxSmartModalService,
		private router: Router		
	) { 
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
	}

	ngOnInit() {
		this.insertOrList = (this.route.snapshot.params.insertOrList == 'insert') ? true : false;
		this.deleted = (this.route.snapshot.params.insertOrList == 'deleted') ? true : false;
		this.modified = (this.route.snapshot.params.insertOrList == 'modified') ? true : false;

		let url = urlApi + '/menu';

		this.http.get(url)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.menus = data;
					this.menusCharger = true;
				}
			)  	
	}

	// ngAfterViewInit() {
	// 	const obj: Object = this.boissonCourant;
	// 	this.ngxSmartModalService.setModalData(obj, 'myModal');
	// }

	supprimerMenu(menu) {
		this.idMenuTodelete = menu.id;
	}

	modifierMenu(menu) {
		this.menuToModifier = menu;
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

		let url = urlApi + '/menu/' + data.id;

		return this.http.put(
			url,
			body,
			options
		).subscribe(
			res => {
				this.ngxSmartModalService.closeLatestModal();
				this.router.navigate(['/admin/deletemenu/simple_recharge'])
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
		if ( data.nom === '' ) message = 'Le champ Nom du menu  ne doit pas être vide';
		if ( data.prix === '' ) message = 'Le champ Prix ne doit pas être vide';
		if ( data.ingredient === '' ) data.ingredient = '-';

		if ( message != '' ) return message;

		return false; 
	}	
}

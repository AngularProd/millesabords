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
	paginate_show:boolean = false;
	paginate:Array<number>;
	page_current:number = 0;
	p_prev:number;
	p_next:number;
	max_page:number = 2;
	limits:number = 5;

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

		this.pagination(1);
	}

	/**
	 * Pagination request
	 *
	 * @param page offset from where to show
	 *
	 * @return void
	*/
	pagination(page_param:number, limits:number = 0) {
		let is_paginate_allowed:boolean = true;

		if (page_param == this.page_current && limits == 0)
			is_paginate_allowed = false;

		if(limits == 0)
			limits = this.limits;
		else
			this.limits = limits;

		// check if paginate is allowed
		if (page_param == 0)
			is_paginate_allowed = false;

		if(is_paginate_allowed) {
			this.menusCharger = false;
			this.http.get(urlApi + '/menu/1/' + page_param + "/" + limits)
			.map(
				(response) => response.json()
			)
			.subscribe(
				(data) => {
					this.menus = data.contain;
					this.menusCharger = (data.contain.length > 0) ? true : false;
					this.p_prev = data.p_prev;
					this.p_next = data.p_next;
					this.page_current = data.p_current;

					this.paginate_show = (data.count > this.limits);

					let page = [];
					let max = Math.ceil(data.count / limits);
					for (var i = 1; i <= max; ++i) {
						page.push(i);
					}

					this.max_page = page.length;
					this.paginate = page;

					if(page_param == 1)
						this.p_prev = 0;
					if(this.p_next > this.max_page)
						this.p_next = 0;
				}
			)  	
		}
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

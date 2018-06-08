import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../../config/host';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeletePlatComponent implements OnInit {

	chargement;

	constructor(
		private http: Http,
		private route: ActivatedRoute,
		private router: Router,
		) { }

	ngOnInit() {
		let id = this.route.snapshot.params.id;

		if ( id == 'simple_recharge' ) {
			this.chargement = 'Modification en cours ...';
			return this.router.navigate(['/admin/plat/modified']);
		}
		this.chargement = 'Suppression en cours ...';

		this.deletePlatById(id);
	}

	deletePlatById(id) {
		let url = urlApi + '/plat/' + id;
	    return this.http.delete(url).subscribe(
			res => {
				this.router.navigate(['/admin/plat/deleted']);
			},
			err => {
				console.log('delete error');
			}
		);    
	}   

}

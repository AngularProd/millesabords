import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-vins2',
  templateUrl: './vins2.component.html',
  styleUrls: ['./vins2.component.css']
})
export class Vins2Component implements OnInit {
  products: object[];
  loading: boolean = true;

  constructor(private http: Http) { }

  ngOnInit() {
    this.loading = true;
    this.http.get(urlApi + '/vins').subscribe( (response) => {
      this.products = (response.json().length) ? response.json() : [];
      this.loading = false;
    });
  }

}

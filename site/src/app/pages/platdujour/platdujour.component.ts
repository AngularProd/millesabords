import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-platdujour',
  templateUrl: './platdujour.component.html',
  styleUrls: ['./platdujour.component.css']
})
export class PlatdujourComponent implements OnInit {

  products: object[];
  loading: boolean = true;

  constructor(private http: Http) { }

  ngOnInit() {
    this.loading = true;
    this.http.get(urlApi + '/platdujour').subscribe((response) => {
      this.products = (response.json().length) ? response.json() : [];
      this.loading = false;
    });
  }

}

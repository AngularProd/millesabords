import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../config/host';
import { Observable } from 'rxjs/Observable';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-platdujour',
  templateUrl: './platdujour.component.html',
  styleUrls: ['./platdujour.component.css']
})
export class PlatdujourComponent implements OnInit {

  listProduct: any = [];
  loading: boolean;
  currentProduct: object;
  deleted: boolean;
  updated: boolean;

  constructor(private http: Http, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.loading = true;
    let url = urlApi + '/platdujour';
    this.http.get(url).subscribe((response) => {
      this.listProduct = (response.json().length) ? response.json() : false;
      this.loading = false;
    });
  }

  setCurrentProduct(product): void {
    this.currentProduct = product;
  }

  deleteProduct(product): void {
    this.loading = true;
    this.http.get(urlApi + '/platdujour/delete/' + product.id).subscribe((response) => {
      this.ngOnInit();
      this.ngxSmartModalService.closeLatestModal();
      this.loading = false;
      this.deleted = true;
      this.updated = false;
    }, (error) => {
      console.log(error);
    });
  }

  updateProduct(product): void {
    this.loading = true;
    console.log(product);
    this.http.post(urlApi + '/platdujour/update/' + product.id, product).subscribe((response) => {
      this.ngOnInit();
      this.ngxSmartModalService.closeLatestModal();
      this.loading = false;
      this.updated = true;
      this.deleted = false;
    }, (error) => {
      console.log(error);
    });
  }

}

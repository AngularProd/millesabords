import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable } from 'rxjs/Observable';
import { urlApi } from '../../config/host';

@Component({
  selector: 'app-vins',
  templateUrl: './vins.component.html',
  styleUrls: ['./vins.component.css']
})
export class VinsComponent implements OnInit {

  listProduct: any = [];
  loading: boolean;
  currentProduct: object;
  deleted: boolean;
  updated: boolean;

  constructor(private http: Http, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    this.loading = true;
    let url = urlApi + '/vins';
    this.http.get(url).subscribe( (response) => {
      this.listProduct = (response.json().length) ? response.json() : false;
      this.loading = false;
    });
  }

  setCurrentProduct(product): void{
    this.currentProduct = product;
  }

  deleteProduct(product): void{
    this.loading = true;
    this.http.get(urlApi + '/vins/delete/' + product.id).subscribe((response) => {
      this.ngOnInit();
      this.ngxSmartModalService.closeLatestModal();
      this.loading = false;
      this.deleted = true;
      this.updated = false;
    }, (error) => {
      console.log(error);
    });
  }

  updateProduct(product): void{
    this.loading = true;
    console.log(product);
    this.http.post(urlApi + '/vins/update/' + product.id, product).subscribe((response) => {
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

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { urlApi } from '../../../config/host';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  saveProduct(product): void {
    console.log(product);
    let url = urlApi + '/platdujour';
    this.http.post(url, product).subscribe((response) => {
      this.router.navigate(['/admin/platdujour/list']);
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}

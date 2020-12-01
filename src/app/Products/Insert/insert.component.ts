import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from 'src/app/contracts/product-detail';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  private name: string;
  private details: ProductDetail[];

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.name = params['name'];
    });
    this.httpService.getProductDetail(this.name).subscribe((detail) => {
      this.details = detail;
    }); 
  }
}

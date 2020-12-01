import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/contracts/product';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
 products;
  constructor(
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  public goToInsert(product: Product): void{
    const navigationExtras: NavigationExtras = {
      queryParams: {
          "name": product.name,
          "definitionUrl": product.definitionUrl
      }
  };
    this.router.navigate(['product-insert'], navigationExtras);
  }
}

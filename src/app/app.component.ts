import { Component, OnInit } from '@angular/core';

import { HttpService } from './services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductComponent implements OnInit {
  title = 'AngularEcommerceApp';
  articles;
  constructor(
    private httpService: HttpService
  ){}
 
  ngOnInit(){
    this.httpService.getProducts().subscribe((data)=>{
      this.articles=data;
    });
  }
}

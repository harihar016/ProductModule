import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService{
    API_URL = 'https://ds-ecom.azurewebsites.net/';
    constructor(
		private httpClient: HttpClient
    ) { }
    
    public getProducts() {
        return this.httpClient.get(this.API_URL + 'products');
      }
    
    public getProductDetail(productName: string): Observable<any> {
        return this.httpClient.get(this.API_URL + 'products/' + productName);
      }
}

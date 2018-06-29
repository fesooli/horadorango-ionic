import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentProvider {

  public payment: any;
  private url = 'https://www.mocky.io/v2/5b0e06153200004f00c198a8'; 

  constructor(public http: HttpClient) {
  }

  public getPaymentForm(){
    if(this.payment) {
      return new Promise(this.payment);
    }

    return new Promise(resolve => {
      this.http.get(this.url).subscribe((data: any) => {
        this.payment = data;
        resolve(this.payment);
      }), error => {
        console.log(error);
      }
    });
  }

}

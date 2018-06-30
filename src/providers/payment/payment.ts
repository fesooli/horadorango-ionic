import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';
import { Order } from '../../pages/model/order';
import { Payment } from '../../pages/model/payment';

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentProvider {

  public payment: any;
  private url = 'https://www.mocky.io/v2/5b0e06153200004f00c198a8'; 

  constructor(public http: HttpClient, private dbProvider: DatabaseProvider) {
  }

  public getPaymentForm(){
    return new Promise(resolve => {
      this.http.get(this.url).subscribe((data: any) => {
        this.payment = data;
        resolve(this.payment);
      }), error => {
        console.log(error);
      }
    });
  }

  public insert(payment: Payment) {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'insert into orders (paymentForm, orderRequested, totalPrice, localName) values (?, ?, ?, ?)';
        let data = [payment.$paymentForm, payment.$orders, payment.$totalPrice, payment.$localName];
        return db.executeSql(sql, data)
          .catch((e) => console.error("erro 3: " + e.message));
      })
      .catch((e) => console.error("erro 4: " + e.toString()));
  }

  public getAll() {
    return this.dbProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT * FROM orders';
        var data: any[];
        
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let payments: any[] = [];
              for (var i = 0; i < data.rows.length; i++) {
                var payment = data.rows.item(i);
                payments.push(payment);
              }
              console.log(JSON.stringify(payments));
              return payments;
            } else {
              return [];
            }
          })
          .catch((e) => console.error(e.toString()));
      })
      .catch((e) => console.error(e.toString()));
  }

}

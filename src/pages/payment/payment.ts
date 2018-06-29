import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentProvider } from '../../providers/payment/payment';
import { Order } from '../model/order';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  public orders: Array<Order>;
  public paymentForm: any;
  public totalOrderPrice: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private paymentProvider: PaymentProvider) {
      this.orders = navParams.get('orders');
      this.calculateOrder(this.orders);
      this.getPaymentForm();
  }

  public getPaymentForm() {
    this.paymentProvider.getPaymentForm().then(data => {
      this.paymentForm = data["paymentForm"];
      this.paymentForm = this.paymentForm.cardBrand;
    });
  }

  public calculateOrder(orders: Array<Order>) {
    orders.forEach(o => {
      console.log(o.$price);
      this.totalOrderPrice += o.$price;
    })
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentProvider } from '../../providers/payment/payment';
import { Order } from '../model/order';
import { CurrencyPipe } from '@angular/common';
import { FinishOrderPage } from '../finish-order/finish-order';
import { Payment } from '../model/payment';
import { AlertController } from 'ionic-angular';
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
  public cardBrand: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private paymentProvider: PaymentProvider,
              private alertController: AlertController) {
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
    this.totalOrderPrice = 0;
    orders.forEach(o => {
      console.log(o.$price);
      this.totalOrderPrice += o.$price;
    })
  }

  public finalizarPedido() {
    if(this.cardBrand != undefined) {
      var payment = new Payment();
      payment.$deliveryAddress = 'Avenida Paulista, 1000 - São Paulo';
      payment.$totalPrice = this.totalOrderPrice;
      payment.$paymentForm = this.cardBrand;
      payment.$orders = "";
      this.orders.forEach(o => {
        payment.$orders += o.$foodName + "\n";
      });
      
      payment.$localName = 'Pizzaria';
      this.paymentProvider.insert(payment);
      this.navCtrl.push(FinishOrderPage);
    }
    else {
      this.presentAlert();
    }
  }

  public presentAlert() {
    let alert = this.alertController.create({
      title: 'Forma de Pagamento',
      subTitle: 'Você precisa esoclher pelo menos uma forma de pagamento',
      buttons: ['Ok']
    });
    alert.present();
  }

}

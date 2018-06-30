import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentProvider } from '../../providers/payment/payment';
import { Payment } from '../model/payment';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public payments: any;

  constructor(public navCtrl: NavController, 
              private paymentProvider: PaymentProvider) {
    this.getPayments();
  }

  public getPayments() {
    this.paymentProvider.getAll().then(data => {
      this.payments = data;
      console.log(JSON.stringify(this.payments));
    });
  }

}

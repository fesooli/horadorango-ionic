import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { Order } from '../model/order';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PlaceMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place-menu',
  templateUrl: 'place-menu.html',
})
export class PlaceMenuPage {
  public place: any;
  public orders = new Array<Order>();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertController: AlertController) {
    this.place = navParams.get('place');
  }

  public select(food: any) {
    var order = new Order();
    order.$id = food.id;
    order.$foodName = food.item;
    order.$price = food.price;
    this.orders.push(order);
  }

  public comprar() {
    if(this.orders.length != 0) {
      this.navCtrl.push(PaymentPage, {orders: this.orders});
    } else {
      this.presentAlert();
    }
  }

  public presentAlert() {
    let alert = this.alertController.create({
      title: 'Escolher Pedido',
      subTitle: 'É necessário escolher ao menos um item',
      buttons: ['Ok']
    });
    alert.present();
  }

}

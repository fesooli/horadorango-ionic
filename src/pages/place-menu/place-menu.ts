import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
import { Order } from '../model/order';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
      console.log("É necessário escolher ao menos um item.");
    }
  }

}

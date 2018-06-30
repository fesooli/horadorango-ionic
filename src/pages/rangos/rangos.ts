import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantsProvider } from '../../providers/restaurants/restaurants';
import { PlaceMenuPage } from '../place-menu/place-menu';

/**
 * Generated class for the RangosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rangos',
  templateUrl: 'rangos.html',
})
export class RangosPage {

  public places: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private restaurantsProvider: RestaurantsProvider ) {
      this.loadPlaces();
  }

  public loadPlaces(){
    this.restaurantsProvider.getPlaces().then(data => {
      this.places = data;
      console.log(data);
    });
  }

  public verMenu(place: any): void {
    this.navCtrl.push(PlaceMenuPage, {place: place});
  }

}

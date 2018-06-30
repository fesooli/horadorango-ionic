import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestaurantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantsProvider {

  public places: any;
  private url = 'https://cors-anywhere.herokuapp.com/https://horadorango.herokuapp.com/place/'; 

  constructor(public http: HttpClient) {
  }

  public getPlaces(){
    if(this.places) {
      return new Promise(this.places);
    }

    return new Promise(resolve => {
      this.http.get(this.url).subscribe((data: any) => {
        this.places = data;
        resolve(this.places);
      }), error => {
        console.log(error);
      }
    });
  }

}

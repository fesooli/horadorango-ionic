import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaceMenuPage } from './place-menu';

@NgModule({
  declarations: [
    PlaceMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaceMenuPage),
  ],
})
export class PlaceMenuPageModule {}

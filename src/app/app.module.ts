import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { RangosPage } from '../pages/rangos/rangos';
import { PlaceMenuPage } from '../pages/place-menu/place-menu';
import { PaymentPage } from '../pages/payment/payment';
import { FinishOrderPage } from '../pages/finish-order/finish-order';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestaurantsProvider } from '../providers/restaurants/restaurants';
import { PaymentProvider } from '../providers/payment/payment';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    RangosPage,
    PlaceMenuPage,
    PaymentPage,
    FinishOrderPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    RangosPage,
    PlaceMenuPage,
    PaymentPage,
    FinishOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantsProvider,
    PaymentProvider,
    DatabaseProvider,
    SQLite
  ]
})
export class AppModule {}

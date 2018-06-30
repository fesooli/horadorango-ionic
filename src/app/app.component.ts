import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { DatabaseProvider } from '../providers/database/database';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      dbProvider.createDatabase();
    });
  }
}

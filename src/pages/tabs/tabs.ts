import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RangosPage } from '../rangos/rangos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RangosPage;
  tab2Root = AboutPage;

  constructor() {

  }
}

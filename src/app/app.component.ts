import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Magic: The Gathering Booster Drafter';
  note = "*Only for Zendikar Rising set.  More sets coming soon!"
}

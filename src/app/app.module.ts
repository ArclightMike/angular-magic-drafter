import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SetComponent } from './set/set.component';
import { CardService } from './card.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SetComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CardService]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SetComponent } from './set/set.component';
import { CardService } from './card.service';
import { AppRoutingModule } from './app-routing.module';
import { BoosterPackComponent } from './booster-pack/booster-pack.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, SetComponent, BoosterPackComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CardService]
})
export class AppModule { }

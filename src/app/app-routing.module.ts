import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { BoosterPackComponent } from './booster-pack/booster-pack.component';

const routes: Routes = [
  {path: 'set', component: SetComponent},
  {path: 'booster-pack', component: BoosterPackComponent},
  {path: '', redirectTo: '/set', pathMatch: 'full'}, //Default is the set view.
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
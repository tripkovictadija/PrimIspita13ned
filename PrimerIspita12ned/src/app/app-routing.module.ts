import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSmartphoneComponent } from './components/single-smartphone/single-smartphone.component';
import { SmartphoneListingComponent } from './components/smartphone-listing/smartphone-listing.component';

const routes: Routes = [

{path: '', redirectTo: 'smartphones', pathMatch: 'full'},
{path: 'smartphones', component: SmartphoneListingComponent},
{path: 'smartphones/:id', component: SingleSmartphoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

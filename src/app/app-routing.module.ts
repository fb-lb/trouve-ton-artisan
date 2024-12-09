import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CraftsmanListComponent } from './craftsman-list/craftsman-list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'liste-des-artisans', component:CraftsmanListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

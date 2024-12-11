import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CraftsmanListComponent } from './craftsman-list/craftsman-list.component';
import { CraftsmanComponent } from './craftsman/craftsman.component';
import { LegalMentionsComponent } from './legal-mentions/legal-mentions.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'liste-des-artisans', component:CraftsmanListComponent},
  {path:'artisan/:id', component:CraftsmanComponent},
  {path:'mentions-legales', component:LegalMentionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

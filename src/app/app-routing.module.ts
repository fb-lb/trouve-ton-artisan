import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CraftsmanListComponent } from './craftsman-list/craftsman-list.component';
import { CraftsmanComponent } from './craftsman/craftsman.component';
import { LegalMentionsComponent } from './legal-mentions/legal-mentions.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { CookiesComponent } from './cookies/cookies.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'liste-des-artisans', component:CraftsmanListComponent},
  {path:'artisan/:id', component:CraftsmanComponent},
  {path:'mentions-legales', component:LegalMentionsComponent},
  {path:'gestion-des-donnees', component:RgpdComponent},
  {path:'accessibilite', component:AccessibilityComponent},
  {path:'cookies', component:CookiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

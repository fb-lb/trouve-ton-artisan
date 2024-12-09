import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardTopCraftsmanComponent } from './card-top-craftsman/card-top-craftsman.component';
import { CraftsmanListComponent } from './craftsman-list/craftsman-list.component';
import { CardListCraftsmanComponent } from './card-list-craftsman/card-list-craftsman.component';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { FilterByTextPipe } from './filter-by-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CardTopCraftsmanComponent,
    CraftsmanListComponent,
    CardListCraftsmanComponent,
    FilterByCategoryPipe,
    FilterByTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

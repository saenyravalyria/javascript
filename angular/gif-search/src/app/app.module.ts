import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GifSearchComponent } from './gif-search/gif-search.component';
import { GifListComponent } from './gif-list/gif-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GifSearchService } from './gif-search/git-search.service';

@NgModule({
  declarations: [
    AppComponent,
    GifSearchComponent,
    GifListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [GifSearchService],
  bootstrap: [AppComponent]
})

export class AppModule {

}

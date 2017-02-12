import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { TvmazeService } from './tvmaze.service';
import { ShowInfoComponent } from './show-info/show-info.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { ScorePipe } from './score.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavBarComponent,
    FooterComponent,
    ShowInfoComponent,
    SearchInputComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TvmazeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

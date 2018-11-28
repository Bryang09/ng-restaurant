import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { CateringComponent } from './catering/catering.component';
import { HeroComponent } from './landing/hero/hero.component';
import { Sub1Component } from './landing/sub1/sub1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    MenuComponent,
    AboutComponent,
    CateringComponent,
    HeroComponent,
    Sub1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

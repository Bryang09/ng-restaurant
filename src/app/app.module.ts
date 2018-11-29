import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { LandingComponent } from "./landing/landing.component";
import { MenuComponent } from "./menu/menu.component";
import { AboutComponent } from "./about/about.component";
import { CateringComponent } from "./catering/catering.component";
import { HeroComponent } from "./landing/hero/hero.component";
import { Sub1Component } from "./landing/sub1/sub1.component";
import { Section1Component } from "./landing/sub1/section1/section1.component";
import { Sub2Component } from "./landing/sub2/sub2.component";
import { Sub3Component } from "./landing/sub3/sub3.component";
import { DishesComponent } from "./landing/sub2/dishes/dishes.component";
import { BurgersComponent } from "./landing/sub2/dishes/burgers/burgers.component";
import { PizzaComponent } from "./landing/sub2/dishes/pizza/pizza.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    MenuComponent,
    AboutComponent,
    CateringComponent,
    HeroComponent,
    Sub1Component,
    Section1Component,
    Sub2Component,
    Sub3Component,
    DishesComponent,
    BurgersComponent,
    PizzaComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

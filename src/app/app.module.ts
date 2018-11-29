import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";
import { HeroComponent } from "./landing/hero/hero.component";
import { Sub1Component } from "./landing/sub1/sub1.component";
import { Section1Component } from "./landing/sub1/section1/section1.component";
import { Sub2Component } from "./landing/sub2/sub2.component";
import { Sub3Component } from "./landing/sub3/sub3.component";
import { DishesComponent } from "./landing/sub2/dishes/dishes.component";
import { BurgersComponent } from "./landing/sub2/dishes/burgers/burgers.component";
import { PizzaComponent } from "./landing/sub2/dishes/pizza/pizza.component";
import { ItalianComponent } from "./landing/sub2/dishes/italian/italian.component";
import { SushiComponent } from "./landing/sub2/dishes/sushi/sushi.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeroComponent,
    Sub1Component,
    Section1Component,
    Sub2Component,
    Sub3Component,
    DishesComponent,
    BurgersComponent,
    PizzaComponent,
    ItalianComponent,
    SushiComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

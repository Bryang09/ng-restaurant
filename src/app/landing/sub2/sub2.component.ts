import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sub2",
  templateUrl: "./sub2.component.html",
  styleUrls: ["./sub2.component.scss"]
})
export class Sub2Component implements OnInit {
  burgers: boolean = true;
  pizza: boolean = false;
  italian: boolean = false;
  sushi: boolean = false;

  constructor() {}

  ngOnInit() {}

  onBurgers = () => {
    this.burgers = true;
    this.pizza = false;
    this.italian = false;
    this.sushi = false;
  };
  onPizza = () => {
    this.burgers = false;
    this.pizza = true;
    this.italian = false;
    this.sushi = false;
  };
  onItalian = () => {
    this.burgers = false;
    this.pizza = false;
    this.italian = true;
    this.sushi = false;
  };
  onSushi = () => {
    this.burgers = false;
    this.pizza = false;
    this.italian = false;
    this.sushi = true;
  };
}

import { Component, OnInit } from "@angular/core";
import { Dish } from "../dishes.model";

@Component({
  selector: "app-burgers",
  templateUrl: "./burgers.component.html",
  styleUrls: ["./burgers.component.scss"]
})
export class BurgersComponent implements OnInit {
  burgers: Dish[] = [
    new Dish(
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "All-American Cheese Burger",
      8
    ),
    new Dish(
      "https://images.pexels.com/photos/161519/abstract-barbecue-barbeque-bbq-161519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "The Bryan Special",
      10
    ),
    new Dish(
      "https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Protein Punch Burger",
      8
    ),
    new Dish(
      "https://images.pexels.com/photos/1431305/pexels-photo-1431305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "Cirspy Chicken Burger",
      9
    ),
    new Dish(
      "https://images.pexels.com/photos/103886/pexels-photo-103886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "Bar-b-q Burger",
      8
    ),
    new Dish(
      "https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Cheese Burger",
      7
    )
  ];
  constructor() {}

  ngOnInit() {}
}

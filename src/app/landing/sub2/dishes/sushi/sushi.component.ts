import { Component, OnInit } from "@angular/core";
import { Dish } from "../dishes.model";

@Component({
  selector: "app-sushi",
  templateUrl: "./sushi.component.html",
  styleUrls: ["./sushi.component.scss"]
})
export class SushiComponent implements OnInit {
  sushis: Dish[] = [
    new Dish(
      "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Californi Roll",
      10
    ),
    new Dish(
      "https://images.pexels.com/photos/697058/pexels-photo-697058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Sushi Combo 1",
      20
    ),
    new Dish(
      "https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Sushi Combo 2",
      20
    ),
    new Dish(
      "https://images.pexels.com/photos/1199979/pexels-photo-1199979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Sushi Combo 3",
      20
    ),
    new Dish(
      "https://images.pexels.com/photos/858501/pexels-photo-858501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Sushi Platter 1",
      12
    ),
    new Dish(
      "https://images.pexels.com/photos/858496/pexels-photo-858496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Sushi Platter 2",
      12
    )
  ];
  constructor() {}

  ngOnInit() {}
}

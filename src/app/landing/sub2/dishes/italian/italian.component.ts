import { Component, OnInit } from "@angular/core";
import { Dish } from "../dishes.model";

@Component({
  selector: "app-italian",
  templateUrl: "./italian.component.html",
  styleUrls: ["./italian.component.scss"]
})
export class ItalianComponent implements OnInit {
  italians: Dish[] = [
    new Dish(
      "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Fettuccine Alfredo",
      16
    ),
    new Dish(
      "https://images.pexels.com/photos/37078/food-spanish-baked-eggs-spanish-egg.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      "Casserol",
      18
    ),
    new Dish(
      "https://images.pexels.com/photos/41320/beef-cheese-cuisine-delicious-41320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Spaghetti with Cheese",
      10
    ),
    new Dish(
      "https://images.pexels.com/photos/998246/pexels-photo-998246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Carbonara",
      18
    ),
    new Dish(
      "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "Farfalle Pasta",
      14
    ),
    new Dish(
      "https://images.pexels.com/photos/1373915/pexels-photo-1373915.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "Pasta with Vegetables",
      12
    )
  ];
  constructor() {}

  ngOnInit() {}
}

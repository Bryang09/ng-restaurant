import { Component, OnInit } from "@angular/core";
import { Dish } from "../dishes.model";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.scss"]
})
export class PizzaComponent implements OnInit {
  pizzas: Dish[] = [
    new Dish(
      "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Supreme Pizza",
      20
    ),
    new Dish(
      "https://images.pexels.com/photos/1069449/pexels-photo-1069449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Hawaiian Pizza",
      20
    ),
    new Dish(
      "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "Olive Pizza",
      20
    ),
    new Dish(
      "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db2ae217ef1bab70c427affa0a7c12dc&auto=format&fit=crop&w=634&q=80",
      "Simple Pizza",
      18
    ),
    new Dish(
      "https://images.unsplash.com/photo-1528742841795-b9022b697938?ixlib=rb-0.3.5&s=7fd219e01555df5ae05e9688fe5f6753&auto=format&fit=crop&w=634&q=80",
      "Pepperioni Pizza",
      20
    ),
    new Dish(
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efe01df2ebde79714be88d560479c9c7&auto=format&fit=crop&w=500&q=60",
      "Cheese Pizza",
      20
    )
  ];
  constructor() {}

  ngOnInit() {}
}

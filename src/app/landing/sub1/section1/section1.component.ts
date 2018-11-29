import { Component, OnInit } from "@angular/core";
import { Icons } from "./section1.model";

@Component({
  selector: "app-section1",
  templateUrl: "./section1.component.html",
  styleUrls: ["./section1.component.scss"]
})
export class Section1Component implements OnInit {
  icons: Icons[] = [
    new Icons(
      "https://img.icons8.com/ios/40/e74c3c/hamburger.png",
      "Best burgers In Town",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porroquibusdam facilis numquam iusto aut."
    ),
    new Icons(
      "https://img.icons8.com/ios/40/e74c3c/food-filled.png",
      "Fresh Italian Food",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porroquibusdam facilis numquam iusto aut."
    ),
    new Icons(
      "https://img.icons8.com/ios/40/e74c3c/sushi.png",
      "World Class Sushi Bar",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porroquibusdam facilis numquam iusto aut."
    )
  ];
  constructor() {}

  ngOnInit() {}
}

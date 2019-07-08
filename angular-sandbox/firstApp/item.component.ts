import { Component } from "@angular/core";

@Component({
  selector: "app-grid",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent {
  name = "Item";
  isItem = () => {
    return true;
  };
}

// src/app/app.component.ts

import { Component } from "@angular/core";
import { DynamicDatabase } from "./dynamic-database.service";
import { MenuComponent } from "./menu/menu.component";

interface Action {
  displayName: string
}
@Component({
  selector: "app-root",
  standalone: true,
  imports: [MenuComponent],
  templateUrl: "app.component.html",
})
export class AppComponent {
  title = "mat-menu-dynamic-data";
  initialData: string[] = ["Fruits", "Vegetables"];
  dataMap = new Map<string, (string | Action)[]>([
    ["Fruits", ["Apple", "Orange", "Banana"]],
    ["Vegetables", ["Tomato", "Potato", "Onion"]],
    ["Apple", ["Fuji", "Macintosh"]],
    ["Onion", ["Yellow", "White", "Purple"]],
    ["Macintosh", ["Yellow", "White", "Purple"]],
  ]);
}

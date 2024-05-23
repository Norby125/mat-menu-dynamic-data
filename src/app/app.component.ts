// src/app/app.component.ts

import { Component } from "@angular/core";
import { DynamicDatabase } from "./dynamic-database.service";
import { Action, MenuComponent } from "./menu/menu.component";


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
    ["Fruits", ["Apple", {displayName: "Orange"}, "Banana"]],
    ["Vegetables", [{displayName: "Tomato"}, {displayName: "Potato"}, "Onion"]],
    ["Apple", [{displayName: "Fuji"}, "Macintosh"]],
    ["Onion", [{displayName: "Yellow"}, {displayName: "White"}, {displayName: "Purple"}]],
    ["Macintosh", [{displayName: "Yellow"}, {displayName: "White"}, {displayName: "Purple"}]],
  ]);
}

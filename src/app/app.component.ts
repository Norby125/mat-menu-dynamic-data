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
  doSmth = () => undefined;
  dataMap = new Map<string, (string | Action)[]>([
    [
      "Fruits",
      [
        "Apple",
        { displayName: "Orange", operation: this.doSmth, icon: "restart_alt" },
        "Banana",
      ],
    ],
    [
      "Vegetables",
      [
        { displayName: "Tomato", operation: this.doSmth, icon: "restart_alt" },
        { displayName: "Potato", operation: this.doSmth, icon: "restart_alt" },
        "Onion",
      ],
    ],
    [
      "Apple",
      [
        { displayName: "Fuji", operation: this.doSmth, icon: "restart_alt" },
        "Macintosh",
      ],
    ],
    [
      "Onion",
      [
        { displayName: "Yellow", operation: this.doSmth, icon: "restart_alt" },
        { displayName: "White", operation: this.doSmth, icon: "restart_alt" },
        { displayName: "Purple", operation: this.doSmth, icon: "restart_alt" },
      ],
    ],
    [
      "Macintosh",
      [
        { displayName: "Yellow", operation: this.doSmth, icon: "restart_alt" },
        { displayName: "White", operation: this.doSmth, icon: "restart_alt" },
        { displayName: "Purple", operation: this.doSmth, icon: "restart_alt" },
      ],
    ],
  ]);
}

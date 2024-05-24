// src/app/app.component.ts

import { Component } from "@angular/core";
import { Action, IplMenuComponent } from "./menu/menu.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [IplMenuComponent, MatMenuModule, MatButtonModule],
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
        "Vegetables",
      ],
    ],
    [
      "Vegetables",
      [
        { displayName: "Tomato", operation: this.doSmth, icon: "restart_alt", disabled: true },
        { displayName: "Potato", operation: this.doSmth, icon: "restart_alt" },
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

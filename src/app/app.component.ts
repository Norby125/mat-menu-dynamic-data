// src/app/app.component.ts

import { Component } from "@angular/core";
import { DynamicDatabase } from "./dynamic-database.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  title = "mat-menu-dynamic-data";
  initialData: string[] = ["Fruits", "Vegetables"];
}

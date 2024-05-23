// src/app/menu/menu.component.ts

import { Component, Input, ViewChild } from "@angular/core";
import { MatLegacyMenu as MatMenu } from "@angular/material/legacy-menu";
import { DynamicDatabase } from "../dynamic-database.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent {
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";
  @Input() isRootNode = false;

  isLoading = false;
  dataLoaded = false;

  constructor(private database: DynamicDatabase) {}

  getData(node: string) {
    if (!this.dataLoaded) {
      this.isLoading = true;
      this.database.getChildren(node).subscribe((d) => {
        this.data = d?.slice() || [];
        this.isLoading = false;
        this.dataLoaded = true;
      });
    }
  }

  isExpandable(node: string) {
    return this.database.isExpandable(node);
  }
}

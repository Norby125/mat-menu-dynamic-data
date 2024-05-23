import { Component, Input } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-menu-item",
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: "./menu-item.component.html",
})
export class MenuItemComponent {
  @Input() data: string[] = [];
  @Input() trigger = "Trigger";

  constructor() {}

   get isExpandable() {
    return this.data.length > 1;
  }
}

import { Component, Input, computed, input } from "@angular/core";
import { DynamicDatabase } from "../dynamic-database.service";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: "./menu.component.html",
})
export class MenuComponent {

  dataMap = input.required<Map<string, string[]>>();
  trigger = input.required<string>();

  currentData = computed( () => {
    const dataMap = this.dataMap();
    const trigger = this.trigger();

    return dataMap.get(trigger);
  })
  constructor() {}

  get asd(){
    return this.dataMap().get(this.trigger);
  }
   get isExpandable() {
    return this.data.length > 1;
  }
}

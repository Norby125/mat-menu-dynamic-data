import { Component, Input, computed, input } from "@angular/core";
import { DynamicDatabase } from "../dynamic-database.service";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

export interface Action {
  displayName: string;
  icon: string;
  operation: () => void;
}

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: "./menu.component.html",
})
export class MenuComponent {
  dataMap = input.required<Map<string, (string | Action)[]>>();
  groupId = input.required<string>();
  isRootNode = input<boolean>(true);

  isString = <T = any>(str: string | T): str is string => {
    return typeof str === "string";
  };
  currentData = computed(() => {
    const dataMap = this.dataMap();
    const groupId = this.groupId();

    const result = dataMap.get(groupId)!;
    return result;
  });
}

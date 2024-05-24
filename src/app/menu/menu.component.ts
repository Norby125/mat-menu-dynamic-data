import { Component, Input, OnInit, computed, inject, input, viewChild } from "@angular/core";
import { MAT_MENU_PANEL, MatMenu, MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { IsStringPipe } from "./is-string.pipe";

export interface Action {
  displayName: string;
  icon: string;
  operation: () => void;
}

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, IsStringPipe],
  templateUrl: "./menu.component.html",
})
export class MenuComponent{
  dataMap = input.required<Map<string, (string | Action)[]>>();
  groupId = input.required<string>();
  isRootNode = input<boolean>(true);

  matMenu = viewChild(MatMenu);
  nodes = computed(() => {
    const dataMap = this.dataMap();
    const groupId = this.groupId();

    const result = dataMap.get(groupId)!;
    return result;
  });
}

import { Component, Input, OnInit, computed, inject, input, viewChild } from "@angular/core";
import { MAT_MENU_PANEL, MatMenu, MatMenuModule } from "@angular/material/menu";
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
  viewProviders: [

    // {
    //   provide: MAT_MENU_PANEL,
    //   useFactory: () => inject(MAT_MENU_PANEL, { skipSelf: true, optional: true })
    // }

  ],
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit{
  ngOnInit(): void {
    // debugger;
    this.menuParent;
  }
  dataMap = input.required<Map<string, (string | Action)[]>>();
  groupId = input.required<string>();
  isRootNode = input<boolean>(true);

  matMenu = viewChild(MatMenu);
  menuParent = inject(MAT_MENU_PANEL, {optional: true});
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

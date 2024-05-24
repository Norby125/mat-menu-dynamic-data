import { Component, computed, input, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';

import { IsStringPipe } from './is-string.pipe';

export interface Action {
  displayName: string;
  disabled?: boolean;
  icon: string;
  operation: () => void;
}

@Component({
  selector: 'ipl-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, IsStringPipe],
  templateUrl: './menu.component.html'
})
export class IplMenuComponent {
  dataMap = input.required<Map<string, (string | Action)[]>>();
  groupId = input.required<string>();
  icon = input<string>('more_horiz');
  isRootNode = input<boolean>(true);

  matMenu = viewChild(MatMenu);
  nodes = computed(() => {
    const dataMap = this.dataMap();
    const groupId = this.groupId();

    return dataMap.get(groupId) ?? [];
  });
}

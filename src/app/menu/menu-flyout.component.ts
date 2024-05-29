import { Component, computed, input, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';

import { MenuNode, MenuNodeAction } from './menu-node';

@Component({
  selector: 'ipl-menu-flyout',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './menu-flyout.component.html'
})
export class IplMenuFlyoutComponent {
  nodes = input.required<MenuNode[]>();

  atLeastOneNodeHasIcon = computed(() => this.nodes().some((x) => x.icon));
  matMenu = viewChild(MatMenu);

  click(event: Event, node: MenuNodeAction) {
    event.stopPropagation();
    node.operation();
  }
}

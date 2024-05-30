import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { IplMenuFlyoutComponent } from './menu-flyout.component';
import { MenuNode, MenuNodeAction, MenuNodeGroup } from './menu-node';
import { IplMenuSectionComponent } from './menu-section.component';

export interface Action {
  displayName: string;
  disabled?: boolean;
  icon: string;
  operation: () => void;
}
@Component({
  selector: 'ipl-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, IplMenuFlyoutComponent, MatIconModule, IplMenuSectionComponent],
  templateUrl: './menu.component.html'
})
export class IplMenuComponent {
  nodes = input.required<MenuNode[]>();

  private filteredNodes = computed(() => {
    const visitAllNodes = (nodes: MenuNode[]) => {
      const result: MenuNode[] = [];
      nodes.forEach((node) => {
        if (!node.hide) {
          if (node.nodeType === 'action') {
            result.push(node);
          }
          if (node.nodeType === 'group') {
            const newNodes = visitAllNodes(node.nodes);
            if (newNodes.length > 0) {
              result.push({ ...node, nodes: newNodes });
            }
          }
        }
      });
      return result;
    };
    return visitAllNodes(this.nodes());
  });

  rootActions = computed(() => {
    return this.filteredNodes()
      .filter((x) => x.nodeType === 'action')
      .map((x) => <MenuNodeAction>x);
  });

  atLeastOneRootActionHasIcon = computed(() => this.rootActions().some((x) => x.icon));

  rootGroups = computed(() => {
    return this.filteredNodes()
      .filter((x) => x.nodeType === 'group')
      .map((x) => <MenuNodeGroup>x);
  });
  icon = input<string>('more_horiz');
}

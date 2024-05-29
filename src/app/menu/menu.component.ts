import { Component, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MenuNode } from './menu-node';
import { IplMenuNodesComponent } from './menu-nodes.component';

export interface Action {
  displayName: string;
  disabled?: boolean;
  icon: string;
  operation: () => void;
}
@Component({
  selector: 'ipl-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, IplMenuNodesComponent, MatIconModule],
  templateUrl: './menu.component.html'
})
export class IplMenuComponent {
  nodes = input.required<MenuNode[]>();
  filteredNodes = computed(() => {
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
  icon = input<string>('more_horiz');
}

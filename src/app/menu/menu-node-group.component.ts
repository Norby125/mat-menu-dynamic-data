import { Component, computed, forwardRef, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';

import { MenuNodeGroup } from './menu-node';
import { IplMenuNodeActionComponent } from './menu-node-action.component';

@Component({
  selector: 'ipl-menu-node-group',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, IplMenuNodeActionComponent],
  providers: [{ provide: MatMenuItem, useExisting: forwardRef(() => IplMenuNodeGroupComponent) }],
  templateUrl: './menu-node-group.component.html',
  styles: `
    :host {
      padding: 0 !important;
    }
  `
})
export class IplMenuNodeGroupComponent extends MatMenuItem {
  // @Input() matMenu!: MatMenu;

  groupNode = input.required<MenuNodeGroup>();
  showIcon = input.required<boolean>();

  atLeastOneNodeHasIcon = computed(() => this.groupNode().nodes.some((x) => x.icon));
}

import { Component, forwardRef, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';

import { MenuNodeAction } from './menu-node';

@Component({
  selector: 'ipl-menu-node-action',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule],
  providers: [{ provide: MatMenuItem, useExisting: forwardRef(() => IplMenuNodeActionComponent) }],
  templateUrl: './menu-node-action.component.html',
  styles: `
    :host {
      padding: 0 !important;
    }
  `
})
export class IplMenuNodeActionComponent extends MatMenuItem {
  actionNode = input.required<MenuNodeAction>();
  showIcon = input.required<boolean>();

  click(event: Event) {
    event.stopPropagation();
    this.actionNode().operation();
  }
}

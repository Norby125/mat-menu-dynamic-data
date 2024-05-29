import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { matExpansionAnimations } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { MenuNodeGroup } from './menu-node';

@Component({
  selector: 'ipl-menu-section',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  // providers: [{ provide: MatMenuItem, useExisting: forwardRef(() => IplMenuSectionComponent) }],
  animations: [matExpansionAnimations.indicatorRotate],
  templateUrl: './menu-section.component.html'
})
export class IplMenuSectionComponent {
  //extends MatMenuItem {
  node = input.required<MenuNodeGroup>();
  expanded = signal(true);

  click(event: Event) {
    event.stopPropagation();
    this.expanded.set(!this.expanded());
  }
}

// src/app/app.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { MenuNode } from './menu/menu-node';
import { IplMenuComponent } from './menu/menu.component';

const operation = () => window.alert('action has been clicked');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IplMenuComponent, MatMenuModule, MatButtonModule],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'mat-menu-dynamic-data';
  doSmth = () => undefined;
  nodes: MenuNode[] = [
    {
      nodeType: 'group',
      displayName: 'Apple',
      icon: 'remove',
      nodes: [
        {
          nodeType: 'action',
          displayName: 'Fuji',
          operation,
          icon: '',
          hide: false
        },
        {
          nodeType: 'group',
          displayName: 'Macintosh',
          icon: '',
          nodes: [
            {
              nodeType: 'action',
              displayName: 'Yellow',
              operation,
              icon: 'restart_alt',
              hide: true
            },
            {
              nodeType: 'action',
              displayName: 'White',
              operation,
              icon: 'restart_alt',
              hide: true
            },
            {
              nodeType: 'action',
              displayName: 'Purple',
              operation,
              icon: 'restart_alt',
              hide: false
            }
          ]
        }
      ]
    },
    {
      nodeType: 'action',
      displayName: 'Orange',
      operation,
      icon: ''
    },
    {
      nodeType: 'group',
      displayName: 'Vegetables',
      icon: 'add',
      hide: false,
      nodes: [
        {
          nodeType: 'action',
          displayName: 'Tomato',
          operation,
          icon: '',
          disabled: true
        },
        {
          nodeType: 'action',
          displayName: 'Potato',
          operation,
          icon: 'restart_alt'
        }
      ]
    }
  ];
}

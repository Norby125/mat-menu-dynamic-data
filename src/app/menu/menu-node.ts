export interface MenuNodeGroup {
  nodeType: 'group';
  displayName: string;
  nodes: MenuNode[];
  hide?: boolean;
  icon?: string;
}

export interface MenuNodeAction {
  nodeType: 'action';
  displayName: string;
  icon?: string;
  disabled?: boolean;
  hide?: boolean;
  operation: () => void;
}

export type MenuNode = MenuNodeGroup | MenuNodeAction;

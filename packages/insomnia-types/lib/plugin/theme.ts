export interface ThemeBlock {
  background?: {
    default?: string;
    success?: string;
    notice?: string;
    warning?: string;
    danger?: string;
    surprise?: string;
    info?: string;
  };
  foreground?: {
    default?: string;
    success?: string;
    notice?: string;
    warning?: string;
    danger?: string;
    surprise?: string;
    info?: string;
  };
  highlight?: {
    default: string;
    xxs?: string;
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
}

export interface ThemeInner extends ThemeBlock {
  rawCss?: string;
  styles?: {
    dialog?: ThemeBlock;
    dialogFooter?: ThemeBlock;
    dialogHeader?: ThemeBlock;
    dropdown?: ThemeBlock;
    editor?: ThemeBlock;
    link?: ThemeBlock;
    overlay?: ThemeBlock;
    pane?: ThemeBlock;
    paneHeader?: ThemeBlock;
    sidebar?: ThemeBlock;
    sidebarHeader?: ThemeBlock;
    sidebarList?: ThemeBlock;
    tooltip?: ThemeBlock;
    transparentOverlay?: ThemeBlock;
  };
}

export interface Theme {
  name: string;
  displayName: string;
  theme: ThemeInner;
}

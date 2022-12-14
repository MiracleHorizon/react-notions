export enum Theme {
  DARK = 'Dark',
  LIGHT = 'Light',
  SYSTEM = 'Use system setting',
}

export default interface ITheme {
  identifier: Theme
  colors: IThemeColors
  svgFills: ISvgFills
}

export interface IThemeColors {
  'text-primary': string
  'text-secondary': string
  'text-statuses-modal-title': string
  'text-lower-titles'?: string
  'text-placeholder-primary': string
  'text-cover-option': string
  'text-cover-titles': string
  'text-sb-page-item-selected': string
  'text-sb-list-active-title': string
  'text-sb-option-title': string
  'text-empty-avatar': string
  'text-view-btn': string
  'text-option-primary': string
  'text-ttip-title': string
  'text-ttip-desc': string
  'text-completed-todo': string
  'bg-primary': string
  'bg-el-hover-primary': string
  'bg-el-active-primary': string
  'bg-sidebar': string
  'bg-selection': string
  'bg-modal-primary': string
  'bg-modal-secondary': string
  'bg-alert-primary': string
  'bg-primary-tooltip': string
  'bg-cover-option': string
  'bg-option-hover': string
  'bg-option-active': string
  'bg-uploader-hover': string
  'bg-uploader-active': string
  'bg-empty-avatar': string
  'bg-gallery-item': string
  'bg-gallery-item-hover': string
  'bg-gallery-item-active': string
  'bg-board-item': string
  'bg-board-item-hover': string
  'bg-board-item-active': string
  'bg-toggle-button': string
  'bg-app-loader': string
  'bg-filled-ttip': string
  'bg-t-list-title-modal': string
  'bg-notion-task-modal': string
  'bg-curr-task-status': string
  'bg-upload-drag': string
  'bg-option-btn': string
  'br-cover-option': string
  'br-uploader': string
  'b-shadow-cover-navbar': string
  'b-shadow-rename-input': string
  'b-shadow-rename-icon': string
  'b-shadow-sb-resizer': string
  'b-shadow-divider': string
  'b-shadow-views-panel': string
  'b-shadow-soon-title': string
  'caret-primary': string
  'caret-secondary': string
  'scroll-thumb': string
  'scroll-thumb-hover': string
  'scroll-track': string
  'modal-inset': string
  divider: string
}

export interface ISvgFills {
  primary: string
  secondary: string
  clearInput: string
  page: string
  check: string
  'page-item-triangle': string
  'page-item-option': string
  'view-btn': string
  'pages-trash-btn': string
  'chevron-down': string
  'hamburger-menu': string
  'page-settings-panel': string
  'plus-tasks-list-new-item': string
  'plus-tasks-list-new-list': string
  'locked-filled': string
  'fav-star': string
  'settings-dots': string
  'toggle-list-triangle': string
  'toggle-empty-list-triangle': string
}

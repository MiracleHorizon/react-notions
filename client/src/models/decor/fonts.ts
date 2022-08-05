export type TPageFont = 'Default' | 'Serif' | 'Mono'

export enum PageFont {
  DEFAULT = `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI",
  Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe
  UI Symbol"`,
  SERIF = 'Lyon-Text, Georgia, ui-serif, serif',
  MONO = 'iawriter-mono, Nitti, Menlo, Courier, monospace',
}

export const PAGE_FONTS: TPageFont[] = ['Default', 'Serif', 'Mono']

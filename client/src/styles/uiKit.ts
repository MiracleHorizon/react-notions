import ITheme, { Theme } from 'themes/theme.model'

export const mobile = '420px'
export const tablet = '950px'

export const bgTransitions = {
  esIn20: 'transition: background 20ms ease-in', // ! Убрать transition
  esInOut50: 'transition: background 50ms ease-in-out',
  esOut100: 'transition: background 0.1s ease-out',
}

export const dFlex = {
  // Pure.
  center: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  start: `
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  'center-start': `
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  'start-center': `
    display: flex;
    align-items: flex-start;
    justify-content: center;
  `,

  'center-s-between': `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  'center-s-around': `
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  'start-s-between': `
    display: flex,
    align-items: flex-start;
    justify-content: space-between;
  `,
  'start-s-around': `
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  `,

  // With flex-direction = column.
  'center-col': `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  'start-col': `
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  `,
  'center-start-col': `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  `,
  'start-center-col': `
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  `,
  'center-s-between-col': `
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  `,
}

export const txtOflow = {
  ell: `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `,
}

export const modalBoxShadowPrimary = (theme: ITheme) =>
  theme.identifier === Theme.LIGHT
    ? `rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px`
    : `rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px`
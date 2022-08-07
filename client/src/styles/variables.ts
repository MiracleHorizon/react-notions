export const mobile = '420px'
export const tablet = '950px'

export const bgTransitions = {
  esIn20: 'transition: background 20ms ease-in',
  esInOut50: 'transition: background 50ms ease-in-out',
  esOut100: 'transition: background 0.1s ease-out',
}

export const dFlex = {
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
    display: flex,
    align-items: center;
    justify-content: space-between;
  `,
  'start-s-between': `
    display: flex,
    align-items: flex-start;
    justify-content: space-between;
  `,
}

export const txtOflow = {
  ell: `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `,
}

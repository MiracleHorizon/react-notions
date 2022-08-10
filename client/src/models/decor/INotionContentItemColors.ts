export default interface INotionContentItemColors {
  colors: {
    Default: IColor
    Gray: IColor
    Brown: IColor
    Orange: IColor
    Yellow: IColor
    Green: IColor
    Blue: IColor
    Purple: IColor
    Pink: IColor
    Red: IColor
  }
  bgColors: {
    Default: IColor
    Gray: IColor
    Brown: IColor
    Orange: IColor
    Yellow: IColor
    Green: IColor
    Blue: IColor
    Purple: IColor
    Pink: IColor
    Red: IColor
  }
}

interface IColor {
  light: string
  dark: string
}

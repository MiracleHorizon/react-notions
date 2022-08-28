export default class ReactTransitionGroup {
  static setDefaultAnimation(appearDuration: number) {
    return `
    &.default-enter {
      opacity: 0;
    }
  
    &.default-enter-active {
      opacity: 1;
      transition: opacity ${appearDuration}ms;
    }
  
    &.default-exit {
      opacity: 1;
    }
  
    &.default-exit-active {
      opacity: 0;
      transition: opacity ${appearDuration}ms;
    }`
  }
}

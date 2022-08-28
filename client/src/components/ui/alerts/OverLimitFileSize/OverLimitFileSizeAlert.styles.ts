import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import { OverLimitFileSizeAlertWrapperProps } from './OverLimitFileSizeAlert.types'

export const appearDuration = 250
export const transitionName = 'overLimitAlert'

export const Wrapper = styled.div<OverLimitFileSizeAlertWrapperProps>`
  cursor: default;
  ${dFlex.center};
  ${p => p.isNotionTaskOpen
      ? `
        position: relative;
        width: 100%;
      `
      : `
        position: absolute
        width: calc(100% - ${p.isSbOpen ? p.sbWidth : 0}px);
  `};
  height: 45px;
  background: rgb(235, 87, 87);
  z-index: 999;
  user-select: none;

  &.${transitionName}-enter {
    opacity: 0;
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transition: opacity ${appearDuration}ms;
  }

  &.${transitionName}-exit {
    opacity: 1;
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transition: opacity ${appearDuration}ms;
  }
`

export const Container = styled.div`
  ${dFlex.center};
  width: 100%;
  height: 100%;
  padding: 0 30px;
`

export const Title = styled.div`
  font-size: 14px;
  line-height: 1.2;
  color: white;
`

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  ${dFlex.center};
  width: 20px;
  height: 20px;
  fill: white;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    opacity: 0.75;
  }

  svg {
    width: 10px !important;
    height: 10px !important;
  }
`

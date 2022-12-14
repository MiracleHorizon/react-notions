import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div<{ isHovering: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 1px;
  opacity: ${p => (p.isHovering ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;

  div {
    margin-right: 1px;
  }
`

export const ButtonContainer = styled.div`
  ${dFlex.center};
  width: 24px;
  height: 24px;

  div[data-btn='plus'] {
    width: 24px;
    height: 24px;
    border-radius: 3px;

    svg {
      fill: ${p => p.theme.svgFills['plus-tasks-list-new-item']} !important;
    }
  }

  div[data-btn='options'],
  div[data-btn='plus'] {
    background: transparent;
    ${bgTransitions.esIn20};

    &:hover {
      background: ${p => p.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${p => p.theme.colors['bg-el-active-primary']};
    }
  }
`

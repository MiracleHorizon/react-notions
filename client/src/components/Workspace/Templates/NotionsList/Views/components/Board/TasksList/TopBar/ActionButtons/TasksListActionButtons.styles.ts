import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/variables'

export const Wrapper = styled.div<{ isHovering: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 1px;
  height: 100%;
  opacity: ${props => (props.isHovering ? 1 : 0)};
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
      fill: ${props =>
        props.theme.svgFills['plus-tasks-list-new-item']} !important;
    }
  }

  div[data-btn='options'],
  div[data-btn='plus'] {
    ${bgTransitions.esIn20};

    &:hover {
      background: ${props => props.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${props => props.theme.colors['bg-el-active-primary']};
    }
  }
`

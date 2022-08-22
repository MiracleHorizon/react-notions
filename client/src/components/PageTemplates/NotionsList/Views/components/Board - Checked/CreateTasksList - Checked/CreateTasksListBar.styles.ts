import styled from 'styled-components'
import { bgTransitions } from 'styles/uiKit'

const Container = styled.div`
  max-width: 35px;
  min-width: 35px;
  margin-top: -4px;

  div[data-btn='plus'] {
    width: 33px;
    height: 33px;
    border-radius: 5px;
    ${bgTransitions.esIn20};

    &:hover {
      background: ${p => p.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${p => p.theme.colors['bg-el-active-primary']};
    }

    svg {
      width: 16px !important;
      height: 16px !important;
      fill: ${p => p.theme.svgFills['plus-tasks-list-new-list']} !important;
    }
  }
`

export default Container

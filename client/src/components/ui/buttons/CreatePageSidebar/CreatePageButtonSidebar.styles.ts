import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Button = styled.div`
  position: absolute;
  top: 0;
  right: 8px;

  div[data-btn='plus'] {
    ${dFlex.center};
    width: 20px;
    height: 20px;
    border-radius: 3px;
    ${bgTransitions.esIn20};

    &:hover {
      background: ${p => p.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${p => p.theme.colors['bg-el-active-primary']};
    }

    svg {
      fill: ${p => p.theme.svgFills['page-item-option']} !important;
    }
  }
`

export default Button

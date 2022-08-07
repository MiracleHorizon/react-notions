import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/variables'

const Wrapper = styled.div`
  position: absolute;
  right: 8px;
  top: 0;

  div[data-btn='plus'] {
    ${dFlex.center};
    width: 20px;
    height: 20px;
    border-radius: 3px;
    ${bgTransitions.esIn20};

    &:hover {
      background: ${props => props.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${props => props.theme.colors['bg-el-active-primary']};
    }

    svg {
      fill: ${props => props.theme.svgFills['page-item-option']} !important;
    }
  }
`

export default Wrapper

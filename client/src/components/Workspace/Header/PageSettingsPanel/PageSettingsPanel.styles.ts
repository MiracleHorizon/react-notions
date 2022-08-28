import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${dFlex['center-s-around']};
  width: max-content;
  height: 45px;
  padding: 0 5px;
  z-index: 500;

  div[data-btn='options'] {
    position: relative;
    width: 32px;
    height: 28px;
    margin-left: 1px;
    background: ${p => p.theme.colors['bg-primary']};

    &:hover {
      background: ${p => p.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${p => p.theme.colors['bg-el-active-primary']};
    }

    svg {
      width: 18px !important;
      height: 18px !important;
      fill: ${p => p.theme.svgFills['settings-dots']} !important;
    }
  }
`

export default Container

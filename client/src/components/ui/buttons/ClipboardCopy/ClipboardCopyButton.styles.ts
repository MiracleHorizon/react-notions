import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'
import { Theme } from 'themes/theme.model'

const Container = styled.div`
  position: absolute;
  cursor: pointer;
  ${dFlex.center};
  width: 24px;
  height: 24px;
  border-radius: 3px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px'
      : 'rgb(15 15 15 / 20%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 2px 4px'};
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${props =>
      props.theme.identifier === Theme.LIGHT
        ? props.theme.svgFills.primary
        : props.theme.svgFills.secondary} !important;
  }
`

export default Container

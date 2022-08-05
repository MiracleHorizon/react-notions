import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/variables'
import { Theme } from 'themes/theme.model'

export const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  ${dFlex['center-start']};
  width: calc(100% - 8px);
  height: 27px;
  margin: 1px 0;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    position: absolute;
    right: 12px;
    fill: ${props => props.theme.colors['text-primary']} !important;
  }
`

export const Container = styled.div<{ color: string }>`
  width: 18px;
  height: 18px;
  margin: 0 6px;
  border-radius: 3px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 10%) 0 0 0 1px inset'
      : 'none'};
  background: ${props => props.color};
`

export const Title = styled.span`
  margin-left: 4px;
  font-size: 14px;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-primary']};
`

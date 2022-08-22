import styled from 'styled-components'
import { dFlex, mobile, modalBoxShadowPrimary } from 'styles/uiKit'
import { ElementCoords } from 'types'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  ${dFlex['center-start']};
  min-height: 36px;
  width: 380px;
  height: auto;
  padding: 0 8px;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};

  @media (max-width: ${mobile}) {
    width: 300px;
  }
`

export const IconContainer = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: 28px;
  height: 28px;
  border-radius: 4px;
  box-shadow: ${p => p.theme.colors['b-shadow-rename-icon']} 0 0 0 1px inset;

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Form = styled.form`
  flex: 1;
  margin-left: 6px;

  input {
    box-shadow: ${p => p.theme.colors['b-shadow-rename-input']} 0 0 0 1px inset;
    caret-color: ${p => p.theme.colors['caret-primary']};
    color: ${p => p.theme.colors['text-primary']};
  }
`

import styled from 'styled-components'
import { dFlex, mobile } from 'styles/uiKit'
import { ElementCoords } from 'types'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  display: flex;
  align-items: center;
  width: 380px;
  min-height: 36px;
  height: auto;
  padding: 0 8px;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: ${props => props.theme.colors['bg-modal-primary']};

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
  box-shadow: ${props => props.theme.colors['b-shadow-rename-icon']} 0 0 0 1px
    inset;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  pointer-events: none;
`

export const Form = styled.form`
  flex: 1;
  margin-left: 6px;

  input {
    box-shadow: ${props => props.theme.colors['b-shadow-rename-input']} 0 0 0
      1px inset;
    caret-color: ${props => props.theme.colors['caret-primary']};
    color: ${props => props.theme.colors['text-primary']};
  }
`

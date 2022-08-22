import styled from 'styled-components'
import { ElementCoords } from 'types'
import { dFlex, mobile, modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  width: 300px;
  height: 44px;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-t-list-title-modal']};

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    width: 270px;
  }
`

export const Form = styled.form`
  ${dFlex['center-s-between']};
  width: 100%;
  height: 100%;
  padding: 8px 10px;
  border-radius: inherit;

  div[data-btn='filled'] {
    margin: 0;
    width: 78px;
  }
`

export const Input = styled.input`
  flex: 1;
  margin-right: 5px;
  font-size: 16px;
  line-height: 24px;
  background: transparent;
  color: ${p => p.theme.colors['text-primary']};

  &::placeholder {
    font-weight: 400;
    color: ${p => p.theme.colors['text-secondary']};
  }
`

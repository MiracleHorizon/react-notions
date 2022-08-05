import styled from 'styled-components'
import { ElementCoords } from 'types'
import { Theme } from 'themes/theme.model'
import { mobile } from 'styles/variables'

export const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  width: 300px;
  height: 44px;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? ' rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px'
      : ' rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px'};
  background: ${props => props.theme.colors['bg-t-list-title-modal']};
  transform: translateX(-50%);

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    width: 270px;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  color: ${props => props.theme.colors['text-primary']};

  &::placeholder {
    font-weight: 400;
    color: ${props => props.theme.colors['text-secondary']};
  }
`

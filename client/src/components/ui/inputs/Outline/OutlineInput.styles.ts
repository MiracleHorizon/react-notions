import styled from 'styled-components'
import { Theme } from 'themes/theme.model'

export const Wrapper = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 3px 25px 3px 6px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset;
  color: ${props => props.theme.colors['text-primary']};
  background: ${props => props.theme.colors['bg-modal-secondary']};
  user-select: none;

  &:focus-visible {
    box-shadow: rgb(46 170 220 / 70%) 0 0 0 1px inset,
      rgb(46 170 220 / 40%) 0 0 0 2px !important;
  }

  &::placeholder {
    opacity: ${props => (props.theme.identifier === Theme.LIGHT ? 0.6 : 1)};
  }
`

import styled from 'styled-components'
import { Theme } from 'themes/theme.model'

export const Wrapper = styled.div`
  position: relative;

  div[data-btn='clear-input'] {
    right: 8px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 3px 25px 3px 6px;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset;
  background: ${p => p.theme.colors['bg-modal-secondary']};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${p => p.theme.colors['text-primary']};
  user-select: none;

  &:focus-visible {
    box-shadow: rgb(46 170 220 / 70%) 0 0 0 1px inset,
      rgb(46 170 220 / 40%) 0 0 0 2px;
  }

  &::placeholder {
    opacity: ${p => (p.theme.identifier === Theme.LIGHT ? 0.6 : 1)};
  }
`

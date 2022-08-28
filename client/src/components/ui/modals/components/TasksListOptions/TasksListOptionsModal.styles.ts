import styled from 'styled-components'
import { dFlex, mobile, modalBoxShadowPrimary } from 'assets/styles/uiKit'
import { ElementCoords } from 'types'

const Container = styled.div<{
  coords: ElementCoords
  template: 'default' | 'taskModal'
}>`
  position: absolute;
  top: ${p => p.coords.top}px;
  left: ${p => p.coords.left}px;
  ${dFlex['center-col']};
  min-height: 40px;
  width: ${p => (p.template === 'default' ? 180 : 220)}px;
  height: auto;
  padding: 6px 0;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  overflow-y: auto;

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    top: 6%;
    max-height: 300px;
  }

  div[data-el='option-item'] {
    padding: 0 6px;

    span {
      font-weight: 400;
      color: ${p => p.theme.colors['text-primary']};
    }

    svg {
      fill: ${p => p.theme.colors['text-primary']} !important;
    }
  }
`

export default Container

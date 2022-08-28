import styled from 'styled-components'
import { mobile, tablet, modalBoxShadowPrimary } from 'assets/styles/uiKit'
import { ElementCoords } from 'types'

export const Container = styled.div<{
  coords: ElementCoords
  activeCategory: string
}>`
  position: absolute;
  top: ${p => p.coords.top}px;
  left: ${p => p.coords.left}px;
  max-width: 540px;
  max-height: 45vh;
  min-height: 200px;
  width: 100%;
  height: ${p => (p.activeCategory === 'Gallery' ? '100%' : 'auto')};
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};

  @media (max-width: ${tablet}) {
    max-width: 400px;
  }

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    max-width: 300px;
  }
`

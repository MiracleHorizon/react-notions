import styled from 'styled-components'
import { mobile, modalBoxShadowPrimary, tablet } from 'assets/styles/uiKit'
import { ElementCoords } from 'types'

const Container = styled.div<{
  coords: ElementCoords
  activeCategory: string
}>`
  position: absolute;
  top: ${p => p.coords.top}px;
  left: ${p => p.coords.left}px;
  max-width: 400px;
  max-height: 30vh;
  min-height: 200px;
  width: 100%;
  height: ${p => (p.activeCategory === 'Emoji' ? '100%' : 'auto')};
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};

  @media (max-width: ${tablet}) {
    max-width: 300px;
  }

  @media (max-width: ${mobile}) {
    left: 50%;
    right: 50%;
    max-width: 250px;
  }
`

export default Container

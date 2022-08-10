import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'styles/uiKit'
import { ElementCoords } from 'types'

const Container = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => p.left}px;
  max-height: 70vh;
  min-height: 20vh;
  width: 245px;
  height: max-content;
  padding: 6px 0;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
  overflow: auto;

  div[data-el='option-item']  {
    padding: 10px;

    span {
      font-weight: 400;
      color: ${props => props.theme.colors['text-primary']};
    }

    svg {
      width: 16px !important;
      height: 16px !important;
      fill: ${props => props.theme.colors['text-primary']} !important;
    }
    
    svg[data-svg='chevron'] {
      position: absolute;
      right: 12px;
      width: 12px !important;
      height: 12px !important;
      fill: ${props => props.theme.svgFills.secondary} !important;
      transform: rotate(270deg);
    }
  }
`

export default Container

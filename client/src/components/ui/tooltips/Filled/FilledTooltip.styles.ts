import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import { FilledTooltipContainerProps } from './FilledTooltip.types'

export const Container = styled.div<FilledTooltipContainerProps>`
  position: absolute;
  top: ${p => p.coords?.top}px;
  left: ${p => p.coords?.left}px;
  display: flex;
  align-items: ${p => (p.itemsCenter ? 'center' : 'flex-start')};
  flex-direction: column;
  max-width: 250px;
  min-width: 0;
  width: max-content;
  padding: 3px 6px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 30%) 0 1px 4px;
  background: ${p => p.theme.colors['bg-filled-ttip']};
  z-index: 2000;

  span,
  p {
    font-size: 12px;
    font-weight: 600;
    margin: 1px 0;
  }
`

export const TextContainer = styled.div`
  ${dFlex['center-s-between']};

  span {
    white-space: nowrap;
    overflow: hidden;
    margin-right: 4px;
  }
`

export const Title = styled.span`
  color: ${p => p.theme.colors['text-ttip-title']};
`

export const Description = styled.p`
  color: ${p => p.theme.colors['text-ttip-desc']};
`

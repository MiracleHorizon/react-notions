import styled from 'styled-components'
import { FilledTooltipContainerProps } from './FilledTooltip.types'

export const Container = styled.div<FilledTooltipContainerProps>`
  position: absolute;
  top: ${props => props.coords?.top}px;
  bottom: ${props => props.coords?.bottom}px;
  left: ${props => props.coords?.left}px;
  right: ${props => props.coords?.right}px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  max-width: 200px;
  width: max-content;
  min-width: 0;
  padding: 3px 6px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 30%) 0 1px 4px;
  background: ${props => props.theme.colors['bg-filled-ttip']};
  ${props => props.transX && 'transform: translateX(-50%)'};
  ${props => props.transY && 'transform: translateY(50%)'};
  z-index: 2000;

  span,
  p {
    font-size: 12px;
    font-weight: 600;
    margin: 1px 0;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;

  span {
    margin-right: 4px;
  }
`

export const Title = styled.span`
  color: ${props => props.theme.colors['text-ttip-title']};
`

export const Description = styled.p`
  color: ${props => props.theme.colors['text-ttip-desc']};
`

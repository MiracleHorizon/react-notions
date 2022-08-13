import styled from 'styled-components'
import { ElementCoords } from 'types'

export const Wrapper = styled.div<ElementCoords>`
  position: absolute;
  top: ${p => p.top}px;
  left: ${p => `calc(${p.left}px + 1px)`};
  max-height: 160px;
  width: 155px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 30%) 0 1px 4px;
  background: ${p => p.theme.colors['bg-filled-ttip']};
  user-select: none;
  z-index: 2000;
`

export const Container = styled.div`
  flex: 1;
  padding: 7px;
  border-radius: 4px;
  overflow: hidden;
`

export const TitleContainer = styled.div`
  max-height: 40px;
  width: 100%;
  height: max-content;
  margin: 1px 0;
`

export const Title = styled.h6`
  font-size: 12px;
  font-weight: 600;
  white-space: normal;
  color: ${p => p.theme.colors['text-ttip-title']};
`

export const Image = styled.img`
  width: 100%;
  border-radius: 3px;
  object-fit: cover;
  pointer-events: none;
`

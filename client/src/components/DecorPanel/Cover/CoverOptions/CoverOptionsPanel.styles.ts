import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 100%;
  user-select: none;
  transition: width 0.3s ease-in-out;
`

export const Options = styled.div<{ isHovering: boolean }>`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px;
  background: ${props => props.theme.colors['bg-cover-option']};
  opacity: ${props => (props.isHovering ? 1 : 0)};
  z-index: 10;
  transition: opacity 0.2s ease-in;
`

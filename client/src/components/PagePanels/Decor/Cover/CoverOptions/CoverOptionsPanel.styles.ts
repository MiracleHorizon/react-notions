import styled from 'styled-components'

export const Wrapper = styled.div<{ fullWidth: boolean }>`
  position: relative;
  max-width: 100%;
  width: ${p => `calc(${p.fullWidth ? '100%' : '900px'} - 180px)`};
  user-select: none;
  transition: width 0.25s ease-in-out;
`

export const Options = styled.div<{ isHovering: boolean }>`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px;
  background: ${p => p.theme.colors['bg-cover-option']};
  opacity: ${p => (p.isHovering ? 1 : 0)};
  z-index: 10;
  transition: opacity 0.2s ease-in;
`

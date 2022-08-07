import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  flex-grow: 0;
  width: 1px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`

export const Line = styled.div<{ isResizingEnabled: boolean }>`
  cursor: ${props => (props.isResizingEnabled ? 'default' : 'col-resize')};
  position: relative;
  width: 12px;
  height: 100%;
  margin-left: -6px;
`

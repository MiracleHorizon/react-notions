import styled from 'styled-components'

export const Label = styled.label`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Input = styled.input`
  position: absolute;
  width: 0.4px;
  height: 0.4px;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
`

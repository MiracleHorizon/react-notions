import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  min-height: 28px;
  height: auto;
  padding: 0 10px;
  border-radius: 3px;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
  color: inherit;
  background: ${props => props.theme.colors['bg-modal-secondary']};
  
  &::placeholder {
    color: ${props => props.theme.colors['text-secondary']};
  }
`

export default Input

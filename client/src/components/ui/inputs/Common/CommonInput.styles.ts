import styled from 'styled-components'

const Input = styled.input`
  min-height: 28px;
  width: 100%;
  height: auto;
  padding: 0 10px;
  border-radius: 3px;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
  color: inherit;
  background: ${p => p.theme.colors['bg-modal-secondary']};

  &::placeholder {
    color: ${p => p.theme.colors['text-secondary']};
  }
`

export default Input

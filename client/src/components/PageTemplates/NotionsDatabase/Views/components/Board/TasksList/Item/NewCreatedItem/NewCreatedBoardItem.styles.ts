import styled from 'styled-components'

const Input = styled.input`
  min-height: 22px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 24px;
  color: ${p => p.theme.colors['text-primary']};

  &::placeholder {
    color: ${p => p.theme.colors['text-secondary']};
  }
`

export default Input

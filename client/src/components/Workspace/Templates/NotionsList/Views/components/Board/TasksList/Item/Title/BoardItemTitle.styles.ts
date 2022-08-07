import styled from 'styled-components'

const Container = styled.div`
  div[contenteditable] {
    font-size: 14px;
    font-weight: 500;
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.5;
    color: ${props => props.theme.colors['text-primary']};

    &:empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: ${props =>
        props.theme.colors['text-secondary']};
    }
  }
`

export default Container

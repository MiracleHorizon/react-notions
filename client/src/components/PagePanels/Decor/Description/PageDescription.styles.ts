import styled from 'styled-components'
import { dFlex, mobile, tablet } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-start']};
  min-height: 40px;
  width: 100%;
  margin-top: 2px;
`

export const Container = styled.div`
  max-width: 780px;
  padding: 5px;

  div[contenteditable] {
    cursor: text;
    font-size: 14px;
    white-space: pre-wrap;
    word-break: break-word;
    caret-color: ${p => p.theme.colors['caret-primary']};

    &:empty:after {
      content: attr(placeholder);
      color: ${p => p.theme.colors['text-secondary']};
    }

    span {
      color: ${p => p.theme.colors['text-primary']};
    }
  }

  @media (max-width: ${tablet}) {
    max-width: 400px;
  }

  @media (max-width: ${mobile}) {
    max-width: 200px;
  }
`

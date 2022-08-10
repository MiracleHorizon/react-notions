import styled from 'styled-components'
import { dFlex, mobile, tablet } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-start']};
  width: 100%;
  min-height: 40px;
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
    caret-color: ${props => props.theme.colors['caret-primary']};

    &:empty:after {
      content: attr(placeholder);
      color: ${props => props.theme.colors['text-secondary']};
    }

    span {
      color: ${props => props.theme.colors['text-primary']} !important;
    }
  }

  @media (max-width: ${tablet}) {
    max-width: 400px;
  }

  @media (max-width: ${mobile}) {
    max-width: 200px;
  }
`

import styled from 'styled-components'
import { TitleContainerProps } from './PageTitle.types'

export const Wrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  height: auto;
`

export const Container = styled.div<TitleContainerProps>`
  //width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div[contenteditable] {
    cursor: text;
    margin-left: ${props =>
      props.template === 'NotionsList' && props.iconUrl ? 10 : 0}px;
    font-size: ${props => (props.template === 'Notion' ? 40 : 32)}px;
    font-weight: 700;
    color: ${props => props.theme.colors['text-primary']};

    &:empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: ${props =>
        props.theme.colors['text-placeholder-primary']};
    }
  }
`

export const Test = styled.div<TitleContainerProps>`
  cursor: text;
  margin-left: ${props =>
    props.template === 'NotionsList' && props.iconUrl ? 10 : 0}px;
  font-size: ${props => (props.template === 'Notion' ? 40 : 32)}px;
  font-weight: 700;
  color: ${props => props.theme.colors['text-primary']};
`

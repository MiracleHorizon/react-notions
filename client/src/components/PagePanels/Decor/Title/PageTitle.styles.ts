import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { TitleContainerProps } from './PageTitle.types'
import fontFamilyHandler from 'utils/helpers/fontFamilyHandler'

export const Wrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  height: auto;
`

export const Container = styled.div<TitleContainerProps>`
  ${dFlex['center-start']};
  //width: 100%;
  height: 100%;

  div[contenteditable] {
    font-family: ${p => fontFamilyHandler(p.font)};
    cursor: text;
    margin-left: ${p => (p.template === 'NotionsList' && p.iconUrl ? 10 : 0)}px;
    font-size: ${p => (p.template === 'Notion' ? 40 : 32)}px;
    font-weight: 700;
    line-height: 50px;
    color: ${p => p.theme.colors['text-primary']};

    &:empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: ${p =>
        p.theme.colors['text-placeholder-primary']};
    }
  }
`

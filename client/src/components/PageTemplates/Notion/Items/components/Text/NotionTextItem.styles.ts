import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import { INotionContentItemStyles } from '../../NotionContentItem.types'
import ContentItemColorsHandler from 'utils/ContentItemColorsHandler'

export const Wrapper = styled.div<INotionContentItemStyles>`
  min-height: 30px;
  width: 100%;
  height: auto;
  background: ${p => ContentItemColorsHandler.setBgColor(p.bgColor, p.theme)};
  color: ${p => ContentItemColorsHandler.setColor(p.color, p.theme)};
`

export const Container = styled.div`
  cursor: text;
  ${dFlex['center-start']};
  width: auto;
  padding: 3px 2px;
  caret-color: ${p => p.theme.colors['caret-primary']};

  div {
    max-width: 100%;
    height: 100%;
    line-height: 24px;
    white-space: pre-wrap;
    word-break: break-word;
  }

  div[contenteditable]:empty:focus:after {
    content: attr(placeholder);
    -webkit-text-fill-color: ${p => p.theme.colors['text-secondary']};
  }
`

import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { INotionContentItemStyles } from '../../NotionContentItem.types'
import ContentItemColorsHandler from 'utils/ContentItemColorsHandler'

const Container = styled.div<INotionContentItemStyles>`
  cursor: text;
  ${dFlex['center-start']};
  min-height: 30px;
  width: 100%;
  height: auto;
  padding: 3px 2px;
  background: ${p => ContentItemColorsHandler.setBgColor(p.bgColor, p.theme)};
  color: ${p => ContentItemColorsHandler.setColor(p.color, p.theme)};
  caret-color: ${p => p.theme.colors['caret-primary']};

  div {
    max-width: 100%;
    width: 100%;
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

export default Container

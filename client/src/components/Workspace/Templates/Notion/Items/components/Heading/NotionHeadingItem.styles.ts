import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'
import { INotionContentItemStyles } from '../../NotionContentItem.types'
import NotionHeadingItemStylesHandler from 'utils/stylesHandlers/NotionHeadingItemStylesHandler'
import ContentItemColorsHandler from 'utils/helpers/ContentItemColorsHandler'

const Container = styled.div<
  INotionContentItemStyles & {
    type: NotionContentItemTypes
  }
>`
  ${dFlex['center-start']};
  min-height: ${p =>
    NotionHeadingItemStylesHandler.getContainerStyles(p.type).containerHeight};
  width: 100%;
  margin-bottom: ${p => NotionHeadingItemStylesHandler.getContainerStyles(p.type).marginBottom};
  padding: 3px 2px;
  background: ${p => ContentItemColorsHandler.setBgColor(p.bgColor, p.theme)};

  div[contenteditable] {
    min-height: ${p =>
      NotionHeadingItemStylesHandler.getContentStyles(p.type).height};
    width: 100%;
    font-size: ${p =>
      NotionHeadingItemStylesHandler.getContentStyles(p.type).fontSize};
    font-weight: 600;
    white-space: pre-wrap;
    word-break: break-word;
    overflow: hidden;
    color: ${p => ContentItemColorsHandler.setColor(p.color, p.theme)};
    caret-color: ${p => p.theme.colors['caret-primary']};

    &:empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: ${p => p.theme.colors['text-secondary']};
    }
  }
`

export default Container

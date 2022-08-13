import styled from 'styled-components'
import ContentItemColorsHandler from 'utils/helpers/ContentItemColorsHandler'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div<{ bgColor: NotionContentItemColorsEnum }>`
  ${dFlex['center-start']};
  min-height: 36px;
  width: 100%;
  height: auto;
  padding-left: 2px;
  background: ${p => ContentItemColorsHandler.setBgColor(p.bgColor, p.theme)};
`

export const Container = styled.div<{ color: NotionContentItemColorsEnum }>`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 1px 14px;
  border-left: 3px solid
    ${p => ContentItemColorsHandler.setColor(p.color, p.theme)};

  div[contenteditable] {
    width: 100%;
    height: 100%;
    font-size: 19px;
    white-space: pre-wrap;
    word-break: break-word;
    color: ${p => ContentItemColorsHandler.setColor(p.color, p.theme)};
    caret-color: ${p => p.theme.colors['caret-primary']};

    &:empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: ${p => p.theme.colors['text-secondary']};
    }
  }
`
import styled from 'styled-components'
import ContentItemColorsHandler from 'utils/ContentItemColorsHandler'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import { dFlex } from 'assets/styles/uiKit'

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
  width: auto;
  height: 100%;
  padding: 1px 14px;
  border-left: 3px solid ${p => ContentItemColorsHandler.setColor(p.color, p.theme)};
  text-align: left;

  div[contenteditable] {
    max-width: 100%;
    height: 100%;
    font-size: 1.2em;
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

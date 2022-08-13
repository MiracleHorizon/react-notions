import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import ContentItemColorsHandler from 'utils/helpers/ContentItemColorsHandler'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'

export const Wrapper = styled.div<{ bgColor: NotionContentItemColorsEnum }>`
  ${dFlex.start};
  min-height: 30px;
  width: 100%;
  height: auto;
  background: ${p => ContentItemColorsHandler.setBgColor(p.bgColor, p.theme)};
`

export const Container = styled.div<{
  color: NotionContentItemColorsEnum
  completed: boolean
}>`
  ${dFlex['center-start']};
  min-height: 28px;
  width: 100%;
  height: auto;
  padding: 3px 2px 3px 6px;

  div[contenteditable] {
    text-decoration: ${p => p.completed && 'line-through'};
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 24px;
    color: ${p =>
      !p.completed
        ? ContentItemColorsHandler.setColor(p.color, p.theme)
        : p.theme.colors['text-completed-todo']};
    caret-color: ${p => p.theme.colors['caret-primary']};
    transition: all ease-in-out 50ms;

    &:empty:after {
      content: attr(placeholder);
      -webkit-text-fill-color: ${p => p.theme.colors['text-secondary']};
    }
  }
`

export const ButtonContainer = styled.div`
  ${dFlex.center};
  margin-right: 8px;
`

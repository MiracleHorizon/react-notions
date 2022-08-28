import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import ContentItemColorsHandler from 'utils/ContentItemColorsHandler'

const TGL_H1_HEIGHT = 45
const TGL_H2_HEIGHT = 38
const TGL_H3_HEIGHT = 32
const TOGGLE_BUTTON_SIZE = 24

export const Wrapper = styled.div<{ bgColor: NotionContentItemColorsEnum }>`
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  background: ${p => ContentItemColorsHandler.setBgColor(p.bgColor, p.theme)};

  div[data-el='notion-item'] {
    width: 100%;
  }
`

export const TitleContainer = styled.div`
  ${dFlex.start};
  height: max-content;
`

export const ToggleContainer = styled.div<{
  type: NotionContentItemTypes
  contentLength: number
}>`
  ${dFlex.start};
  margin-top: ${p => handleToggleButtonMarginTop(p.type)}px;
  height: 100%;
  padding-left: 2px;

  div[data-btn='toggle'] {
    width: 24px;
    height: 24px;

    svg {
      width: 0.75em !important;
      height: 0.75em !important;
      fill: ${p => p.contentLength > 0
          ? p.theme.svgFills['toggle-list-triangle']
          : p.theme.svgFills['toggle-empty-list-triangle']} !important;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  padding-left: calc(${TOGGLE_BUTTON_SIZE}px + 4px);
`

const handleToggleButtonMarginTop = (type: NotionContentItemTypes): number => {
  switch (type) {
    case NotionContentItemTypes.TGL_H1:
      return (TGL_H1_HEIGHT - TOGGLE_BUTTON_SIZE) / 2
    case NotionContentItemTypes.TGL_H2:
      return (TGL_H2_HEIGHT - TOGGLE_BUTTON_SIZE) / 2
    case NotionContentItemTypes.TGL_H3:
      return (TGL_H3_HEIGHT - TOGGLE_BUTTON_SIZE) / 2
    default:
      return (TGL_H3_HEIGHT - TOGGLE_BUTTON_SIZE) / 2
  }
}

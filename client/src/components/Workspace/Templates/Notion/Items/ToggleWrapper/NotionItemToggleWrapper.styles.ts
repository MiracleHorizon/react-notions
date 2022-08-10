import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'
import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'
import ContentItemColorsHandler from 'utils/helpers/ContentItemColorsHandler'

const toggleButtonOffsetHandler = (type: NotionContentItemTypes): number => {
  switch (type) {
    case NotionContentItemTypes.TGL_H1:
      return (45 - 24) / 2
    case NotionContentItemTypes.TGL_H2:
      return (38 - 24) / 2
    case NotionContentItemTypes.TGL_H3:
      return (32 - 24) / 2
    default:
      return (32 - 24) / 2
  }
}

export const Wrapper = styled.div<{ bgColor: NotionContentItemColorsEnum }>`
  width: 100%;
  height: auto;
  padding-left: 2px;
  background: ${p => ContentItemColorsHandler.setBgColor(p.bgColor, p.theme)};

  div[data-el='notion-item'] {
    width: calc(100% + 25px);
    margin-left: -25px;
    padding-right: 0;
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
  margin-top: ${p => toggleButtonOffsetHandler(p.type)}px;
  height: 100%;

  div[data-btn='toggle'] {
    width: 24px;
    height: 24px;

    svg {
      width: 0.75em !important;
      height: 0.75em !important;
      fill: ${p =>
        p.contentLength > 0
          ? p.theme.svgFills['toggle-list-triangle']
          : p.theme.svgFills['toggle-empty-list-triangle']} !important;
    }
  }
`

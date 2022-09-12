import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import ReactTransitionGroup from '../../../../../libs/react-transition-group'

export const appearDuration = 300

const Container = styled.div<{ type: NotionContentItemTypes }>`
  cursor: grab;
  position: absolute;
  top: ${p => handleOptionButtonOffsetTop(p.type)}px;
  left: -45px;
  ${dFlex.center};
  margin-right: 2px;

  svg {
    fill: ${p => p.theme.svgFills.secondary} !important;
  }

  ${ReactTransitionGroup.setDefaultAnimation(appearDuration)}
`

export default Container

const handleOptionButtonOffsetTop = (type: NotionContentItemTypes): number => {
  const OPTION_BUTTON_HEIGHT = 24
  const ITEM_DEFAULT_MIN_HEIGHT = 30
  const H1_ITEM_MIN_HEIGHT = 46
  const H2_ITEM_MIN_HEIGHT = 38
  const H3_ITEM_MIN_HEIGHT = 32
  const QUOTE_ITEM_MIN_HEIGHT = 36
  const DIVIDER_ITEM_MIN_HEIGHT = 15

  switch (type) {
    case NotionContentItemTypes.QUOTE:
      return (QUOTE_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.H1:
      return (H1_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.H2:
      return (H2_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.H3:
      return (H3_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.TGL_H1:
      return (H1_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.TGL_H2:
      return (H2_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.TGL_H3:
      return (H3_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.DIVIDER:
      return (DIVIDER_ITEM_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2

    case NotionContentItemTypes.WEB_BOOKMARK:
      return 4

    default:
      return (ITEM_DEFAULT_MIN_HEIGHT - OPTION_BUTTON_HEIGHT) / 2
  }
}

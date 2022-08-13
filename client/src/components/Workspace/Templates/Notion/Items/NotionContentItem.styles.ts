import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'

const handleHeadingTopMargin = (type: NotionContentItemTypes): number => {
  switch (type) {
    case NotionContentItemTypes.H1:
      return 30
    case NotionContentItemTypes.H2:
      return 20
    case NotionContentItemTypes.H3:
      return 15
    case NotionContentItemTypes.TGL_H1:
      return 30
    case NotionContentItemTypes.TGL_H2:
      return 20
    case NotionContentItemTypes.TGL_H3:
      return 15
    default:
      return 3
  }
}

const Wrapper = styled.div<{ type: NotionContentItemTypes }>`
  position: relative;
  ${p =>
    p.type === NotionContentItemTypes.DIVIDER ? dFlex.center : dFlex.start}
  min-height: ${p => (p.type === NotionContentItemTypes.DIVIDER ? 15 : 30)}px;
  width: 100%;
  height: auto;
  margin: ${p => handleHeadingTopMargin(p.type)}px 0 3px 0;

  a {
    width: 100%;
  }
`

export default Wrapper

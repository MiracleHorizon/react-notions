import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'
import NotionItemOptionButtonOffsetHandler from 'utils/helpers/NotionItemOptionButtonOffsetHandler'

const Container = styled.div<{ type: NotionContentItemTypes }>`
  position: relative;
  top: ${p => NotionItemOptionButtonOffsetHandler(p.type)}px;
  ${dFlex.center};
  margin-right: 2px;

  svg {
    fill: ${p => p.theme.svgFills.secondary} !important;
  }
`

export default Container

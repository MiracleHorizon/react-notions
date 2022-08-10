import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'

const Wrapper = styled.div<{ type: NotionContentItemTypes }>`
  position: relative;
  ${p =>
    p.type === NotionContentItemTypes.DIVIDER ? dFlex.center : dFlex.start}
  width: 100%;
  min-height: ${p => (p.type === NotionContentItemTypes.DIVIDER ? 15 : 30)}px;
  height: auto;
  margin: 3px 0;
  padding-right: 30px;
  padding-left: 5px;
  //background: #e8e8e8;

  a {
    width: 100%;
  }
`

export default Wrapper


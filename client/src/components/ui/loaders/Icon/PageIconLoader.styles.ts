import styled from 'styled-components'
import { TPageTemplate } from 'models/page/IPage'
import { dFlex } from 'assets/styles/uiKit'

const Container = styled.div<{
  template: TPageTemplate
  coverUrl: string | null
}>`
  cursor: pointer;
  position: relative;
  ${dFlex.center};
  ${p => p.template === 'Notion'
      ? `
        width: 140px;
        height: 140px
       `
      : `
        width: 36px; 
        height: 36px;
      `};
  margin-top: ${p => (p.coverUrl && p.template === 'Notion' ? -80 : 0)}px;
  border-radius: 3px;
  background: rgb(55, 53, 47, 0.16);
  z-index: 10;
`

export default Container

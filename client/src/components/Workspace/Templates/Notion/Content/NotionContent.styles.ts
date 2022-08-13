import styled from 'styled-components'
import { TPageFont } from 'models/decor/fonts'
import fontFamilyHandler from 'utils/helpers/fontFamilyHandler'

const Content = styled.div<{ font: TPageFont }>`
  div,
  span,
  p {
    font-family: ${p => fontFamilyHandler(p.font)};
  }
`

export default Content

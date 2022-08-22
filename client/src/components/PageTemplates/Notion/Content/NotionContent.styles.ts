import styled from 'styled-components'
import { TPageFont } from 'models/decor/fonts'
import fontFamilyHandler from 'utils/helpers/fontFamilyHandler'

const Content = styled.div<{ font: TPageFont; smallText: boolean }>`
  div,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${p => fontFamilyHandler(p.font)};
  }

  font-size: ${p => (p.smallText ? 14 : 16)}px;
  line-height: 1.5;
`

export default Content

import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import { TPageTemplate } from 'models/page/IPage'

const Container = styled.div<{ fullWidth: boolean; template: TPageTemplate }>`
  ${dFlex.center};
  width: ${p => (p.fullWidth || p.template === 'NotionsDatabase' ? 88 : 47)}%;
  height: 300px;
`

export default Container

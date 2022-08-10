import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { TPageTemplate } from 'models/page/IPage'

const Container = styled.div<{ fullWidth: boolean; template: TPageTemplate }>`
  ${dFlex.center};
  width: ${props =>
    props.fullWidth || props.template === 'NotionsList' ? 88 : 47}%;
  height: 300px;
`

export default Container

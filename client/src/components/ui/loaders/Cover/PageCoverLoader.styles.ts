import styled from 'styled-components'
import ITheme from 'themes/theme.model'
import { TPageTemplate } from 'models/page/IPage'
import { dFlex } from 'styles/uiKit'

const Container = styled.div<{
  appTheme: ITheme
  template: TPageTemplate
}>`
  ${dFlex.center};
  width: 100%;
  height: ${p => (p.template === 'Notion' ? 290 : 195)}px;
  background: ${p => p.appTheme.colors['bg-primary']};
`

export default Container

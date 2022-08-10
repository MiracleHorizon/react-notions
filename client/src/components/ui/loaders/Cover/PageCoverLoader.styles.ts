import styled from 'styled-components'
import ITheme from 'themes/theme.model'
import { TPageTemplate } from 'models/page/IPage'
import { lightTheme } from 'themes/light'
import { dFlex } from 'styles/uiKit'

const Container = styled.div<{
  appTheme: ITheme | undefined
  template: TPageTemplate
}>`
  ${dFlex.center};
  width: 100%;
  height: ${props => (props.template === 'Notion' ? 290 : 195)}px;
  background: ${props =>
    props.appTheme
      ? props.appTheme.colors['bg-primary']
      : lightTheme.colors['bg-primary']};
`

export default Container

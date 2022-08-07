import styled from 'styled-components'
import { dFlex } from 'styles/variables'
import { lightTheme } from 'themes/light'
import ITheme from 'themes/theme.model'

const Wrapper = styled.div<{ appTheme: ITheme | undefined }>`
  ${dFlex.center};
  width: 100vw;
  height: 100vh;
  background: ${props =>
    props.appTheme
      ? props.appTheme.colors['bg-primary']
      : lightTheme.colors['bg-primary']};
`

export default Wrapper

import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { dFlex } from 'assets/styles/uiKit'

const Content = styled.div<{ topIndent?: boolean; isScrollOnTop: boolean }>`
  position: relative;
  ${p => p.topIndent && 'top: 35px'};
  ${dFlex['start-col']};
  width: 100%;
  height: 100%;
  padding: 4px;
  ${p => p.isScrollOnTop &&
    `box-shadow: rgb(${
      p.theme.identifier === Theme.LIGHT ? '55 53 47' : '255 255 255'
    } / 9%) 0 1px 0 inset`};
  overflow: auto;
`

export default Content

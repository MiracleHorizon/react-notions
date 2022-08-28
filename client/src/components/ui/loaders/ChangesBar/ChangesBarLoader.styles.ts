import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import { Theme } from 'themes/theme.model'

const Container = styled.div`
  ${dFlex.center};
  width: 100%;
  height: 41px;
  margin-top: 6px;
  padding-top: 4px;
  box-shadow: ${p =>
      p.theme.identifier === Theme.LIGHT
        ? 'rgb(55 53 47 / 9%)'
        : 'rgb(255 255 255 / 9%)'}
    0px -1px 0px;
`

export default Container

import styled from 'styled-components'
import { Theme } from 'themes/theme.model'

const Container = styled.div`
  margin-top: 6px;
  padding: 3px 10px;
  box-shadow: ${props =>
      props.theme.identifier === Theme.LIGHT
        ? 'rgb(55 53 47 / 9%)'
        : 'rgb(255 255 255 / 9%)'}
    0px -1px 0px;

  p {
    margin: 3px 0;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${props => props.theme.colors['text-secondary']};
  }
`

export default Container

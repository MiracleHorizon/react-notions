import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

const Bar = styled.div`
  ${dFlex.center};

  svg {
    width: 16px !important;
    height: 16px !important;
    margin-right: 5px;
    fill: ${p => p.theme.colors['text-secondary']} !important;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${p => p.theme.colors['text-secondary']};
  }
`

export default Bar

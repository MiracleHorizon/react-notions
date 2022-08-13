import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  height: max-content;
  padding: 6px 4px;
  margin-top: 2px;
`

export const TitleContainer = styled.div`
  ${dFlex['center-s-between']};
  padding: 5px 10px;
  user-select: none;
`

export const Title = styled.h5`
  font-size: 11px;
  text-transform: uppercase;
  line-height: 24px;
  color: ${p => p.theme.colors['text-option-primary']};
`

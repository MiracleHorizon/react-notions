import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { PanelContainerProps } from './PageDecorPanel.types'

export const Wrapper = styled.div`
  ${dFlex['center-col']};
  width: 100%;
  user-select: none;
`

export const Container = styled.div<PanelContainerProps>`
  width: ${p => p.fullWidth || p.template === 'NotionsList' ? '100%' : '900px'};
  padding-left: 90px;
  padding-bottom: 5px;
  transition: width ease-in-out 0.25s;
`

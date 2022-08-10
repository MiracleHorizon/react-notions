import styled from 'styled-components'
import { mobile, tablet } from 'styles/uiKit'
import { PanelContainerProps } from './PageDecorPanel.types'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  user-select: none;
`

export const Container = styled.div<PanelContainerProps>`
  width: ${props =>
    props.fullWidth || props.template === 'NotionsList' ? 88 : 47}%;

  @media (max-width: ${tablet}) {
    width: ${props =>
      props.fullWidth || props.template === 'NotionsList' ? 95 : 70}%;
  }

  @media (max-width: ${mobile}) {
    width: 95%;
  }
`

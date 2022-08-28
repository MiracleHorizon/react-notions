import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import { NotionTaskContentWrapperProps } from './NotionTaskContent.types'

export const Wrapper = styled.main<NotionTaskContentWrapperProps>`
  cursor: text;
  ${dFlex['center-start-col']};
  min-height: 0;
  height: calc(100% - ${p => (p.isOverLimitFileSizeAlertOpen ? 90 : 45)}px);
  padding-bottom: 40px;
  overflow: auto;

  div[data-el='cover'] {
    height: 195px;
  }

  div[data-el='decor-panel'] {
    width: 100%;
    padding-left: 120px;
  }

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isScrollOnBottom ? 3 : 0)}px;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 120px;
`

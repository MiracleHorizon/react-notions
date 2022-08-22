import styled from 'styled-components'

export const Container = styled.ul<{ isOnBottom: boolean }>`
  width: 100%;
  min-height: 0;
  height: calc(100% - 48px);
  margin-bottom: 1px;
  padding: 4px;
  overflow: hidden auto;

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isOnBottom ? 4 : 0)}px;
  }
`

export const NoResultsTitle = styled.span`
  margin-top: 12px;
  margin-left: 6px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${p => p.theme.colors['text-statuses-modal-title']};
`

import styled from 'styled-components'

export const Description = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
  user-select: none;
  font-size: 16px;
`

export const ViewsList = styled.ul`
  width: 100%;
  padding-left: 5px;
`

export const ViewItem = styled.li`
  display: flex;
  align-items: center;
  height: 26px;
  margin: 2px 0;
  user-select: none;
  list-style: inside;
  font-size: 15px;

  &::before {
    content: '\\2022';
    margin-right: 10px;
    color: ${p => p.theme.colors['text-secondary']};
  }

  svg {
    width: 16px !important;
    height: 16px !important;
    fill: ${p => p.theme.svgFills.primary} !important;
  }
`

export const ViewTitle = styled.span`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  color: ${p => p.theme.colors['text-secondary']};
`

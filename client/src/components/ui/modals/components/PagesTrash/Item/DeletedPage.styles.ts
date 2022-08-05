import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 28px;
  min-height: 28px;
  margin: 1px 0;
  padding-left: 10px;
  border-radius: 3px;
  transition: background 20ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.colors['text-primary']};
`

export const Icon = styled.img`
  min-width: 18px;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  object-fit: cover;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  height: calc(100% - 4px);
  margin-left: auto;
  margin-right: 10px;

  svg {
    fill: ${props => props.theme.svgFills['pages-trash-btn']} !important;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 27px;
  margin: 1px 4px;
  padding: 0 10px;
  border-radius: 3px;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors['text-primary']};
`

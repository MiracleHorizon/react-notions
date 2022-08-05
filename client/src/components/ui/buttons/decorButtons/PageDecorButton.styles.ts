import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3px;
  padding: 2px 6px;
  border-radius: 3px;
  transition: background 50ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.colors['text-secondary']};
`

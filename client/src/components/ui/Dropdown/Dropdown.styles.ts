import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 4px 6px;
  border-radius: 3px;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    margin-top: 3px;
  }
`

export const Title = styled.span`
  margin-right: 5px;
  font-size: 14px;
  color: ${props => props.theme.colors['text-primary']};
`

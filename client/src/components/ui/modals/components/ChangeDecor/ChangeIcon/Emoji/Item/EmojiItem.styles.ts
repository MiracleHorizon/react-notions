import styled from 'styled-components'

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 10);
  height: 32px;
  margin-right: auto;
  margin-bottom: 1px;
  padding: 3px;
  border-radius: 3px;
  font-size: 24px;
  transition: background 50ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export default Container

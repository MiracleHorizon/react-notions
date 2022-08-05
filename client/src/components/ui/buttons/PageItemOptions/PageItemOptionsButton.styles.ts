import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 2px;
  border-radius: 3px;
  transition: background 20ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    fill: ${props => props.theme.svgFills['page-item-option']} !important;
  }
`

export default Container

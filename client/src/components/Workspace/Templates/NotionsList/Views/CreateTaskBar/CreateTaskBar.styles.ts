import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px !important;
    height: 16px !important;
    margin-right: 5px;
    fill: ${props => props.theme.colors['text-secondary']} !important;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.colors['text-secondary']};
  }
`

export default Container

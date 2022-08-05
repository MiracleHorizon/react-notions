import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: max-content;
  height: 45px;
  padding: 0 5px;
  z-index: 500;
  
  div[data-btn='toggle-fav'] {
    svg {
      fill: ${props => props.theme.svgFills['settings-dots']} !important;
    }
  }

  div[data-btn='options'] {
    position: relative;
    width: 32px;
    height: 28px;
    margin-left: 1px;

    svg {
      width: 18px !important;
      height: 18px !important;
      fill: ${props => props.theme.svgFills['settings-dots']} !important;
    }
  }
`

export default Container

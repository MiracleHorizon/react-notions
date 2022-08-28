import styled from 'styled-components'
import ReactTransitionGroup from 'libs/react-transition-group'

const Highlight = styled.div`
  position: absolute;
  width: 100%;
  height: 4px;
  background: rgba(46, 170, 220, 0.5);

  ${ReactTransitionGroup.setDefaultAnimation(300)};
`

export default Highlight

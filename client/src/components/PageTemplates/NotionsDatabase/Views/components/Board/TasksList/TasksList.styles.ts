import styled from 'styled-components'
import { tablet } from 'assets/styles/uiKit'
import ReactTransitionGroup from 'libs/react-transition-group'

export const appearDuration = 100

const Wrapper = styled.div<{ dragging?: boolean }>`
  cursor: ${p => (p.dragging ? 'grabbing' : 'auto')};
  min-width: 270px;
  max-width: 270px;
  min-height: 100%;
  width: 270px;
  height: auto;
  margin-right: 14px;
  user-select: none;

  @media (max-width: ${tablet}) {
    width: 250px;
    margin-right: 0;
  }

  @media (max-width: 850px) {
    width: 220px;
    margin-right: 0;
  }

  @media (max-width: 740px) {
    width: 200px;
  }

  ${ReactTransitionGroup.setDefaultAnimation(appearDuration)};
`

export default Wrapper

import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  max-width: 300px;
  min-width: 60px;
  width: 100%;
  min-height: 28px;
  margin: 15px auto;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset, rgb(15 15 15 / 10%) 0 1px 2px;
  background: rgb(46, 170, 220);
  user-select: none;
  ${bgTransitions.esInOut50};

  &:hover {
    background: rgb(6, 156, 205);
  }

  &:active {
    background: rgb(0, 141, 190);
  }

  svg {
    margin-left: 5px;
  }
`

export const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 28px;
  color: white;
`

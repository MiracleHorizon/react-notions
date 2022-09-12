import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  align-self: flex-start;
  margin-left: 30px;
  margin-bottom: 25px;
  
  svg {
    position: absolute;
    top: 10px;
    left: -80px;
    min-width: 55px;
    min-height: 55px;
    width: 55px;
    height: 55px;
  }
`

export const Text = styled.h1`
  font-size: 21px;
  font-weight: 500;
  color: rgb(55, 53, 47);
`

export const Description = styled.p`
  margin-top: 3px;
  font-size: 17px;
`

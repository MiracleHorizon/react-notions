import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 25%;
  padding: 2px;
`

export const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 64px;
  
  &:hover {
    opacity: 0.9;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  object-fit: cover;
  object-position: center 50%;
  pointer-events: none;
`

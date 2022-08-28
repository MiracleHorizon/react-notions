import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'assets/styles/uiKit'

export const Wrapper = styled.div<{ disabled: boolean }>`
  width: calc(100% - 8px);
  margin: 1px 4px;
  user-select: none;
  ${p => p.disabled && `
    pointer-events: none;
    opacity: 0.55;
  `};
`

export const Container = styled.div`
  cursor: pointer;
  ${dFlex['center-start']};
  padding: 5px 2px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const ImageContainer = styled.div`
  width: 46px;
  height: 46px;
  margin-left: 10px;
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px;
  background: white;
  transform: translateZ(0px);
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`

export const TextContainer = styled.div`
  margin-left: 10px;

  h4,
  p {
    ${txtOflow.ell};
  }
`

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-primary']};
`

export const Description = styled.p`
  font-size: 12px;
  color: ${p => p.theme.colors['text-secondary']};
`

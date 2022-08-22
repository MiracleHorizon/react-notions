import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'

export const Wrapper = styled.div`
  cursor: pointer;
  ${dFlex['center-start']};
  min-height: 45px;
  width: 100%;
  height: 45px;
  padding-left: 15px;
  padding-right: 40px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Avatar = styled.img`
  min-width: 18px;
  min-height: 18px;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  pointer-events: none;
`

export const Title = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`

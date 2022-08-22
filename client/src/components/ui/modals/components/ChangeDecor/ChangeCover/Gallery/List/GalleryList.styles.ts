import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['start-center-col']};
  width: 100%;
  height: max-content;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const TitleContainer = styled.div`
  cursor: pointer;
  position: relative;
  ${dFlex.center};
  width: max-content;
  height: 20px;
  margin-bottom: 6px;
  padding: 2px 4px;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${p => p.theme.colors['text-cover-titles']};
`

export const Link = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

export const Content = styled.div`
  ${dFlex['center-start']};
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`

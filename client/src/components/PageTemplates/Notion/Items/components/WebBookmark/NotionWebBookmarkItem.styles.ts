import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'assets/styles/uiKit'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<{ isEmpty: boolean }>`
  cursor: pointer;
  ${p => p.isEmpty
      ? `
      ${dFlex['center-start']}
      height: 50px;
      padding: 10px 14px;
      background: ${
        p.theme.identifier === Theme.LIGHT
          ? 'rgb(242, 241, 238)'
          : 'rgba(255, 255, 255, 0.03)'
      }
    `
      : `
      ${dFlex['start-center-col']}
      height: 70px;
      border: 1px solid ${
        p.theme.identifier === Theme.LIGHT
          ? 'rgba(55, 53, 47, 0.16)'
          : 'rgba(255, 255, 255, 0.13)'
      }
      `};
  width: 100%;
  margin: 0 1px;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  p {
    ${txtOflow.ell};
  }
`

export const Title = styled.p`
  font-size: 14px;
  color: ${p => p.theme.colors['text-option-primary']};
`

export const IconContainer = styled.div`
  min-width: 25px;
  max-width: 25px;
  width: 25px;
  height: 25px;
  margin-right: 10px;

  svg {
    fill: ${p =>
      p.theme.svgFills[
        p.theme.identifier === Theme.LIGHT ? 'primary' : 'secondary'
      ]} !important;
  }
`

export const UrlContainer = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px 14px;

  p {
    color: ${p => p.theme.colors['text-primary']};
  }
`

export const DomainTitle = styled.p`
  justify-self: flex-start;
  font-size: 13px;
  margin-bottom: 10px;
`

export const UrlTitle = styled.p`
  font-size: 12px;
`

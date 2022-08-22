import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Container = styled.div<{ locked: boolean; reLock?: boolean }>`
  cursor: pointer;
  ${p => (p.locked || p.reLock ? dFlex.center : 'display: none')};
  min-width: 75px;
  height: 24px;
  margin-left: 3px;
  padding: 0 6px;
  border-radius: 3px;
  fill: ${p => p.reLock ? 'rgb(46, 170, 220)' : p.theme.svgFills['locked-filled']};
  ${bgTransitions.esIn20};
  
  ${p => p.reLock ? `
  border: 1px solid rgb(46, 170, 220);    
      
  &:hover {
    background: rgba(46, 170, 220, 0.1);
  }
  
  &:active {
    background: rgba(46, 170, 220, 0.2);
  }
  `
          : `
  &:hover {
    background: ${p.theme.colors['bg-el-hover-primary']};
  }
  
  &:active {
    background: ${p.theme.colors['bg-el-active-primary']};
  }`};

  svg {
    margin-right: 4px;
  }

  span {
    color: ${p => p.reLock ? 'rgb(46, 170, 220)' : p.theme.colors['text-secondary']};
  }
`

export const Title = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

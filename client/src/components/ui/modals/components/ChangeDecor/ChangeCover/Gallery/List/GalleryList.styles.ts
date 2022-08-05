import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const TitleContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 20px;
  margin-bottom: 6px;
  padding: 2px 4px;
  border-radius: 3px;
  user-select: none;
  transition: background 20ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors['text-cover-titles']};
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
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

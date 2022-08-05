import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
  user-select: none;

  p {
    margin-top: 15px;
    font-size: 12px;
    color: ${props => props.theme.colors['text-cover-titles']};
  }
`

export const Button = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 32px;
  border: 1px solid ${props => props.theme.colors['br-cover-uploader']};
  border-radius: 3px;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors['text-primary']};
  transition: background 50ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-cover-uploader-hover']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-cover-uploader-active']};
  }
`

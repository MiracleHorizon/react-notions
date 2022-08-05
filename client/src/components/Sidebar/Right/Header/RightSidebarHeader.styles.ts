import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  top: 45px;
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${props => props.theme.colors['br-r-sb-header']};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 5px;
`

export const Title = styled.h3`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors['text-primary']};
`

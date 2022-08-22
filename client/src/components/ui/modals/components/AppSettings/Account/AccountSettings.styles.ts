import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  //background: pink;
`

export const Container = styled.div`
  padding: 0 30px;
`

export const PersonalInfoContainer = styled.div`
  max-height: 200px;
  width: 100%;
  height: 100%;
  margin: 15px 0;
  padding: 1px;
`

export const PersonalInfoTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-primary']};
`

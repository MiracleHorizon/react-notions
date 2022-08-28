import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
`

export const Container = styled.div`
  padding: 0 30px;
  
  h2, h4 {
    color: ${p => p.theme.colors['text-primary']};
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
`

export const PersonalInfoContainer = styled.div`
  max-height: 200px;
  width: 100%;
  height: 100%;
  margin-top: 18px;
  margin-bottom: 15px;
  padding: 1px;
`

export const PersonalInfoTitle = styled.h4`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
`

import styled from 'styled-components'
import { dFlex, txtOflow } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  max-height: 200px;
  width: 100%;
  height: 100%;
  margin-top: 8px;
  margin-bottom: 22px;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1px;
`

export const Title = styled.h4`
  width: 100%;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  pointer-events: none;
`

export const EmptyAvatar = styled.div`
  ${dFlex.center};
  width: 90px;
  height: 90px;
  padding-bottom: 10px;
  border-radius: 50%;
  background: ${p => p.theme.colors['bg-empty-avatar']};
`

export const EmptyAvatarTitle = styled.span`
  font-size: 60px;
  text-transform: uppercase;
  color: ${p => p.theme.colors['text-empty-avatar']};
`

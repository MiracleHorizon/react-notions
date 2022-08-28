import styled from 'styled-components'
import { lightTheme } from 'themes/light'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  position: relative;
  top: 20%;
  width: 310px;
  user-select: none;

  div[data-el='divider'] {
    background: rgb(55 53 47 / 9%);
  }
`

export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 5px;
`

export const InputContainer = styled.div`
  ${dFlex['start-center-col']};
  margin-bottom: 5px;

  input[data-input='outline'] {
    margin-top: 8px;
    background: ${lightTheme.colors['bg-modal-secondary']};
    color: ${lightTheme.colors['text-primary']};

    &::placeholder {
      opacity: 0.6;
    }
  }
`

export const Label = styled.label`
  width: 100%;
  margin: 4px 0;
  font-size: 12px;
  font-weight: 500;
  color: rgba(55, 53, 47, 0.65);
`

export const ErrorTitle = styled.p<{ isActive: boolean }>`
  height: 15px;
  font-size: 11px;
  color: rgb(235, 87, 87);
  font-weight: 500;
  opacity: ${p => (p.isActive ? 1 : 0.5)};
`

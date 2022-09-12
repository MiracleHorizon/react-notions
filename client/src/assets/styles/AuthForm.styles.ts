import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import { lightTheme } from 'themes/light'

export const Container = styled.form`
  ${dFlex['start-col']};
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
  
  input[type='submit'] {
    display: none;
  }

  div[data-btn='outline'] {
    margin-top: 8px;
    border-color: rgba(235, 87, 87, 0.5) ;
    
    p {
      font-weight: 600;
    }
  }
`

export const InputContainer = styled.div`
  ${dFlex['start-center-col']};
  width: 100%;
  margin-bottom: 5px;

  div[data-el='outline-input-wrapper'] {
    width: 100%;
    margin-top: 4px;
    
    input {
      background: ${lightTheme.colors['bg-modal-secondary']};
      color: ${lightTheme.colors['text-primary']};

      &::placeholder {
        opacity: 0.6;
      }
    }
  }
  
  h6 {
    margin: 8px 0;
    font-size: 12px;
  }
`

export const Label = styled.label`
  width: 100%;
  margin: 3px 0;
  font-size: 12px;
  font-weight: 500;
  color: rgba(55, 53, 47, 0.65);
`

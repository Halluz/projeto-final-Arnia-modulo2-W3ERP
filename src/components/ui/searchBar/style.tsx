import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const DivSeachStyle = styled.div`
  width: 100%;
`

export const InputSeachStyle = styled.input`
  width: 100%;
  max-width: 40rem;
  height: 5.6rem;
  border: 2px solid ${colors.grey300};
  border-radius: 1.6rem;
  padding-left: 1.6rem;
  color: ${colors.grey900};

  &::placeholder {
    color: ${colors.grey600};
  }
`
export const Container1Search = styled.div`
  width: 100%;
  max-width: 47.2rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const FormContainer2Search = styled.form`
  width: 100%;
  max-width: 40rem;
  border: 1 solid green;
  position: relative;
`

export const ButtonLupa = styled.button`
  height: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  border: none;
  background-color: transparent;
`

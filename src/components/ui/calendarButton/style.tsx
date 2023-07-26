import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const SpanCalendarButton = styled.span`
  font-weight: 600;
  color: ${colors.primaryBlue};
`
export const BtnCalendarStyle = styled.button`
  border: none;
  background-color: ${colors.white};
  color: ${colors.grey800};
  border-radius: 1rem;
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 22.4rem;
  height: 4rem;
  cursor: pointer;

  &:active {
    background-color: ${colors.azul4};
  }
`

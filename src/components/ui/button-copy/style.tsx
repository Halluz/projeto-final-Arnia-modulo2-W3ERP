import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ButtonBlue = styled.button<{ heightProp: string }>`
  color: white;
  background-color: ${colors.primaryBlue};
  font-size: 1.6rem;
  font-weight: 600;
  border: none;
  border-radius: 10rem;
  width: 100%;
  height: ${({ heightProp }) => heightProp}; //5.6rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;

  &:active {
    // estilo aplicado quando o botão do mouse está precionado
    color: yellow;
  }
`

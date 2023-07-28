import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { colors } from '@/assets/styles/colors'

export const NavLinks = styled(NavLink)<{ compresssidebar: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  gap: 2.2rem;
  height: 5.6rem;
  ${({ compresssidebar }) =>
    compresssidebar ? '' : 'width: 25.5rem'}; //width: 25.5rem;
  border-radius: 0.8rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;

  &:hover {
    //estilo aplicado quando o mouse está sobre o elemento
    background-color: rgba(118, 130, 193, 0.3);
    font-weight: 600;
  }
  &:active {
    // estilo aplicado quando o botão do mouse está precionado
    background-color: rgba(118, 130, 193, 1);
    font-weight: 600;
    color: yellow;
  }

  &.active {
    // Estilo aplicado quando o elemento é clicado permanecendo o estilo no elemento
    background-color: rgba(118, 130, 193, 0.3);
    font-weight: 600;
  }
`

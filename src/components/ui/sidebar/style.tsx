import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ContainerSidebarNav = styled.nav<{ compressSidebar: boolean }>`
  position: fixed;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primaryBlue};
  width: ${({ compressSidebar }) =>
    compressSidebar ? '11.6rem' : '27.1rem'}; //27.1rem;
  height: 100vh;
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`
export const ListMenu = styled.ul`
  margin: 0rem 0.8rem;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const LogoW3ERP = styled.img`
  margin-top: 4.9rem;
  margin-bottom: 5.7rem;
  cursor: pointer;
  padding: 1.5rem;
  border-radius: 10rem;

  &:hover {
    box-shadow: 0rem 0rem 2rem yellow;
  }
`

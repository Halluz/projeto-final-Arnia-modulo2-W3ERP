import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  align-items: center;
`

export const DropdownMenu = styled.ul`
  padding: 8px 0;
  list-style: none;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin: 1.6rem 0rem 2.4rem 0rem;
`

export const ContainerMenuForm = styled.form<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 23.5rem; //33.5rem;
  /* width: 100%; */
  box-shadow: 0px 7px 30px 0px rgba(187, 192, 205, 0.4);
  position: absolute;
  right: 0;
  background-color: #fff;
  padding: 1.9rem 1.6rem 2.6rem 1.6rem;
  list-style: none;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); */
  border-radius: 1.6rem;
  border: 0.1rem solid rgb(187, 192, 205);
`
export const MenuTitle = styled.div`
  font-weight: 600;
`

export const DropdownMenuItem = styled.li`
  display: flex;
  gap: 1.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${colors.grey900};
`
export const ImageDropdown = styled.img`
  cursor: pointer;
  border-radius: 1.6rem;
  &:hover {
    box-shadow: 0rem 0rem 1rem ${colors.grey500};
  }
`

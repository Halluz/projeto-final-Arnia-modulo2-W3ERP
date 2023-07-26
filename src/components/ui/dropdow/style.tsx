import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const DropdownButton = styled.button`
  background-color: transparent;
  color: #333;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`
// 'open' está sendo passado como prop para o componente de estilização DropdownMenu. Open é usado como estilização condicional para a propriedade de estilo "display"
export const DropdownMenu = styled.ul<{ open: boolean }>`
  position: absolute;
  /* top: 100%; */
  right: 0;
  background-color: #fff;
  padding: 8px 0;
  list-style: none;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: ${({ open }) => (open ? 'block' : 'none')};
  border-radius: 1.6rem;
`

export const DropdownMenuItem = styled.li`
  display: flex;
  gap: 1.2rem;
  padding: 2.3rem 2.2rem;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${colors.grey600};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`

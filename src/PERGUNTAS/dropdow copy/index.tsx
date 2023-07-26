import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownButton = styled.button`
  background-color: #eee;
  color: #333;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`
// 'open' está sendo passado como prop para o componente de estilização DropdownMenu. Open é usado como estilização condicional para a propriedade de estilo "display"
const DropdownMenu = styled.ul<{ open: boolean }>`
  position: absolute;
  /* top: 100%; */
  left: 0;
  background-color: #fff;
  padding: 8px 0;
  list-style: none;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: ${({ open }) => (open ? 'block' : 'none')};
`

const DropdownMenuItem = styled.li`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleMenu}>Abrir Menu demais</DropdownButton>
      <DropdownMenu open={isOpen}>
        <DropdownMenuItem>Opção 1</DropdownMenuItem>
        <DropdownMenuItem>Opção 2</DropdownMenuItem>
        <DropdownMenuItem>Opção 3</DropdownMenuItem>
      </DropdownMenu>
    </DropdownContainer>
  )
}

export default Dropdown // Linha 57

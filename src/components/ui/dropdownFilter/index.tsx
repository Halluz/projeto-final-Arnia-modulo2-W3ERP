import { useState, useEffect, useRef } from 'react'
import {
  DropdownContainer,
  DropdownMenu,
  DropdownMenuItem,
  ContainerMenuForm,
  MenuTitle,
  ImageDropdown
} from './style'

import { colors } from '@/assets/styles/colors'
import filterIcon from '../../../assets/images/icons/filterIcon.svg'
import Button2 from '../button-copy'

type TypeDropdownFilter = {
  classification: 'EM_ALTA' | 'EMBAIXA' | 'NEUTRO' | ''
}

export const DropdownFilter = ({ classification }: TypeDropdownFilter) => {
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
      <ImageDropdown onClick={toggleMenu} src={filterIcon} alt="Ícone Filtro" />

      <ContainerMenuForm open={isOpen}>
        <MenuTitle>Filtrar por:</MenuTitle>
        <hr color={colors.grey300} style={{ margin: '1.6rem 0rem' }} />
        <p>Status</p>
        <DropdownMenu>
          <DropdownMenuItem>
            <input type="radio" name="filter" id="option1" />{' '}
            <label htmlFor="option1">Todos</label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <input type="radio" name="filter" id="option2" />{' '}
            <label htmlFor="option2">Em alta</label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <input type="radio" name="filter" id="option3" />{' '}
            <label htmlFor="option3">Em baixa</label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <input type="radio" name="filter" id="option4" />{' '}
            <label htmlFor="option3">Neutro</label>
          </DropdownMenuItem>
        </DropdownMenu>
        <Button2 heightProp="4.8rem">Aplicar</Button2>
      </ContainerMenuForm>
    </DropdownContainer>
  )
}

export default DropdownFilter

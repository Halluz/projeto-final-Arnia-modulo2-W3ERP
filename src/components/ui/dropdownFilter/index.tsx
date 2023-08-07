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

export type TypeDropdownFilter = {
  classificationStateVariable:
    | '&classificacao=EM_ALTA'
    | '&classificacao=EM_BAIXA'
    | '&classificacao=NEUTRO'
    | ''
  setClassificationStateVariable: React.Dispatch<
    React.SetStateAction<
      | '&classificacao=EM_ALTA'
      | '&classificacao=EM_BAIXA'
      | '&classificacao=NEUTRO'
      | ''
    >
  >
}

export const DropdownFilter = ({
  classificationStateVariable,
  setClassificationStateVariable
}: TypeDropdownFilter) => {
  const [isOpen, setIsOpen] = useState(false)
  const [radioSelected, setRadioSelected] = useState('')
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

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioSelected(event.target.value) // Atribuição do valor do input radio selecionado
    console.log('Valor de event.target.value: ', event.target.value)
    console.log(
      'Valor de radioSelected (funcão handleoptionChange): ',
      radioSelected
    )
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Previne o comportamento padrão do formulário de atualizar a página
    if (classificationStateVariable !== radioSelected) {
      if (
        radioSelected === '' ||
        radioSelected === '&classificacao=EM_ALTA' ||
        radioSelected === '&classificacao=EM_BAIXA' ||
        radioSelected === '&classificacao=NEUTRO'
      ) {
        setClassificationStateVariable(radioSelected)
        console.log(
          'Valor de radioSelected na função handleSubmit',
          radioSelected
        )
        console.log(
          'valor de classificationStateVariable alterada em handleSubmit: ',
          classificationStateVariable
        )
        toggleMenu()
      }
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

      <ContainerMenuForm open={isOpen} onSubmit={handleSubmit}>
        <MenuTitle>Filtrar por:</MenuTitle>
        <hr color={colors.grey300} style={{ margin: '1.6rem 0rem' }} />
        <p>Status</p>
        <DropdownMenu>
          <DropdownMenuItem>
            <input
              type="radio"
              name="filter"
              id="Todos"
              value=""
              checked={radioSelected === ''}
              onChange={handleOptionChange}
            />{' '}
            <label htmlFor="Todos">Todos</label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <input
              type="radio"
              name="filter"
              id="Em_alta"
              value="&classificacao=EM_ALTA"
              checked={radioSelected === '&classificacao=EM_ALTA'}
              onChange={handleOptionChange}
            />{' '}
            <label htmlFor="Em_alta">Em alta</label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <input
              type="radio"
              name="filter"
              id="Em_baixa"
              value="&classificacao=EM_BAIXA"
              checked={radioSelected === '&classificacao=EM_BAIXA'}
              onChange={handleOptionChange}
            />{' '}
            <label htmlFor="Em_baixa">Em baixa</label>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <input
              type="radio"
              name="filter"
              id="Neutro"
              value="&classificacao=NEUTRO"
              checked={radioSelected === '&classificacao=NEUTRO'}
              onChange={handleOptionChange}
            />{' '}
            <label htmlFor="Neutro">Neutro</label>
          </DropdownMenuItem>
        </DropdownMenu>
        <Button2 heightProp="4.8rem">Aplicar</Button2>
      </ContainerMenuForm>
    </DropdownContainer>
  )
}

export default DropdownFilter

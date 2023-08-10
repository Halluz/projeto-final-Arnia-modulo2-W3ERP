import searchIcon from '../../../assets/images/icons/searchLupa.svg'

import {
  ButtonLupa,
  Container1Search,
  DivSeachStyle,
  InputSeachStyle,
  FormContainer2Search
} from './style'
import DropdownFilter from '../dropdownFilter'
import { useState } from 'react'

type TypeSearchBar = {
  classificationStateVariable?:
    | '&classificacao=EM_ALTA'
    | '&classificacao=EM_BAIXA'
    | '&classificacao=NEUTRO'
    | ''
  setClassificationStateVariable?: React.Dispatch<
    React.SetStateAction<
      | '&classificacao=EM_ALTA'
      | '&classificacao=EM_BAIXA'
      | '&classificacao=NEUTRO'
      | ''
    >
  >
  keyWord: string
  setKeyWord: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({
  classificationStateVariable,
  setClassificationStateVariable,
  keyWord,
  setKeyWord
}: TypeSearchBar) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault() // Previne o comportamento padrão do formulário de atualizar a página
    if (keyWord !== query) {
      console.log(
        `Em handleSubmit() de SearchBar: keyWord(${keyWord}) !== query(${query}) => ${
          keyWord !== query
        }`
      )
      console.log(`setKeyWord(&query=query)  => setKeyWord(&query=${query})`)
      setKeyWord(`&query=${query}`)
      console.log(`Valor 'atual' de keyWord = (${keyWord})`)
    }
  }

  return (
    <DivSeachStyle>
      <Container1Search>
        <FormContainer2Search onSubmit={event => handleSubmit(event)}>
          <InputSeachStyle
            type="search"
            placeholder="Pesquise uma palavra-chave"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <ButtonLupa type="submit">
            <img src={searchIcon} alt="Ìcone Lupa" />
          </ButtonLupa>
        </FormContainer2Search>

        {classificationStateVariable !== undefined &&
        setClassificationStateVariable !== undefined ? (
          <DropdownFilter
            classificationStateVariable={classificationStateVariable}
            setClassificationStateVariable={setClassificationStateVariable}
          />
        ) : (
          ''
        )}
      </Container1Search>
    </DivSeachStyle>
  )
}

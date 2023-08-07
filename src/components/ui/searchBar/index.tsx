import searchIcon from '../../../assets/images/icons/searchLupa.svg'
import filterIcon from '../../../assets/images/icons/filterIcon.svg'

import {
  ButtonLupa,
  Container1Search,
  DivSeachStyle,
  InputSeachStyle,
  FormContainer2Search
} from './style'
import DropdownFilter, { TypeDropdownFilter } from '../dropdownFilter'

type TypeSearchBar = {
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
  keyWord: string
  setKeyWord: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar = ({
  classificationStateVariable,
  setClassificationStateVariable,
  keyWord,
  setKeyWord
}: TypeSearchBar) => {
  return (
    <DivSeachStyle>
      <Container1Search>
        <FormContainer2Search>
          <InputSeachStyle
            type="search"
            placeholder="Pesquise uma palavra-chave"
            value={keyWord}
            onChange={event => setKeyWord(event.target.value)}
          />
          <ButtonLupa type="submit">
            <img src={searchIcon} alt="Ìcone Lupa" />
          </ButtonLupa>
        </FormContainer2Search>
        {/* <img src={filterIcon} alt="Ícone Filtro" /> */}
        <DropdownFilter
          classificationStateVariable={classificationStateVariable}
          setClassificationStateVariable={setClassificationStateVariable}
        />
      </Container1Search>
    </DivSeachStyle>
  )
}

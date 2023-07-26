import searchIcon from '../../../assets/images/icons/searchLupa.svg'
import filterIcon from '../../../assets/images/icons/filterIcon.svg'

import {
  ButtonLupa,
  Container1Search,
  FormSeachStyle,
  InputSeachStyle,
  Container2Search
} from './style'
import DropdownFilter from '../dropdownFilter'

export const SearchBar = () => {
  return (
    <FormSeachStyle>
      <Container1Search>
        <Container2Search>
          <InputSeachStyle
            type="search"
            placeholder="Pesquise uma palavra-chave"
          />
          <ButtonLupa type="submit">
            <img src={searchIcon} alt="Ìcone Lupa" />
          </ButtonLupa>
        </Container2Search>
        {/* <img src={filterIcon} alt="Ícone Filtro" /> */}
        <DropdownFilter />
      </Container1Search>
    </FormSeachStyle>
  )
}

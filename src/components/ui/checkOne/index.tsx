import checkOneDarBaixa from '../../../assets/images/icons/check-oneDarBaixa.svg'
import { useState } from 'react'
import { ContainerCheckOne, ContainerExternal, ImageBallon } from './style'
import ballon from '../../../assets/images/icons/CheckOneBallon.svg'

export const CheckOneComponent = () => {
  const [checked, setChecked] = useState(false)

  const toggleCheck = (event: React.MouseEvent) => {
    setChecked(!checked)
  }

  return (
    <ContainerExternal onClick={event => toggleCheck(event)}>
      <ImageBallon src={ballon} alt="Balão" />
      <ContainerCheckOne clicked={checked}>
        <img src={checkOneDarBaixa} alt="Ícone verificado" />
      </ContainerCheckOne>
    </ContainerExternal>
  )
}

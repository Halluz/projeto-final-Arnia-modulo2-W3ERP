import checkOneDarBaixa from '../../../assets/images/icons/check-oneDarBaixa.svg'
import { useState } from 'react'
import { ContainerCheckOne, ContainerExternal, ImageBallon } from './style'
import ballon from '../../../assets/images/icons/CheckOneBallon.svg'

export const CheckOneComponent = () => {
  const [showBallon, setShowBallon] = useState(false)
  const [checked, setChecked] = useState(false)

  const showHideBallon = (event: React.MouseEvent) => {
    setShowBallon(!showBallon)
    setChecked(!checked)
  }

  return (
    <ContainerExternal onClick={event => showHideBallon(event)}>
      <ImageBallon showAndHide={showBallon} src={ballon} alt="Balão" />
      <ContainerCheckOne clicked={checked}>
        <img src={checkOneDarBaixa} alt="Ícone verificado" />
      </ContainerCheckOne>
    </ContainerExternal>
  )
}

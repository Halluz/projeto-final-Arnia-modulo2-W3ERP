import { useState } from 'react'
import buttonToggleEmAlta from '../../../assets/images/icons/buttonToggleEmAlta.svg'
import buttonToggleEmBaixa from '../../../assets/images/icons/buttonToggleEmBaixa.svg'
import { TypeStatus } from '../status'

type TypeButtonTogle = {
  status: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
  setStatus: React.Dispatch<
    React.SetStateAction<'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'>
  >
}

export const ButtonToggle = ({ status, setStatus }: TypeButtonTogle) => {
  //const [classification, setClassification] = useState('EM_ALTA')
  //const [emAlta, setEmalta] = useState(true)

  const handleToggleStatus = (event: React.MouseEvent<HTMLElement>) => {
    //setEmAlta(!emAlta)
    /* if (classification === 'EM_BAIXA') {
      setClassification('EM_ALTA')
    } else if (classification === 'EM_ALTA') {
      setClassification('EM_BAIXA')
    } */
    if (status === 'EM_BAIXA') {
      setStatus('EM_ALTA')
    } else if (status === 'EM_ALTA') {
      setStatus('EM_BAIXA')
    }
  }

  //if (emAlta) {
  //if (classification === 'EM_ALTA') {
  if (status === 'EM_ALTA') {
    return (
      <img
        onClick={event => handleToggleStatus(event)}
        src={buttonToggleEmAlta}
        alt="Imagem botão de alternâcia, em alta."
      />
    )
  }

  return (
    <img
      onClick={event => handleToggleStatus(event)}
      src={buttonToggleEmBaixa}
      alt="Imagem botão de alternância, em baixa"
    />
  )
}

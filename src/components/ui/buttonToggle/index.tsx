import { useState } from 'react'
import buttonToggleEmAlta from '../../../assets/images/icons/buttonToggleEmAlta.svg'
import buttonToggleEmBaixa from '../../../assets/images/icons/buttonToggleEmBaixa.svg'

export const ButtonToggle = () => {
  const [emAlta, setEmAlta] = useState(true)

  const handleToggleStatus = (event: React.MouseEvent<HTMLElement>) => {
    setEmAlta(!emAlta)
  }

  if (emAlta) {
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

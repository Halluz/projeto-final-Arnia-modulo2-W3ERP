import { ContainerInput, InputStyle, LabelStyle, Eye } from './style'
import { useState } from 'react'
import eyeOlho from '../../../assets/images/icons/eyeOlho.svg'

type TypeInput = {
  label: string
  placeholder: string
  type2: 'text' | 'email' | 'password'
}

export const InputForm = ({ label, placeholder, type2 }: TypeInput) => {
  const [inputValue, setInputValue] = useState('')
  const [typeEye, setTypeEye] = useState(type2)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  //Função de vizualizar ou esconder conteúdo do campo
  const viewOrHideField = () => {
    if (typeEye === 'password') {
      setTypeEye('text')
    } else {
      setTypeEye('password')
    }
  }

  return (
    <ContainerInput>
      <LabelStyle hasValue={inputValue.length > 0} htmlFor="">
        {label}
      </LabelStyle>
      <InputStyle
        hasValue={inputValue.length > 0}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        type={typeEye}
      />
      {/* Renderização condicional do olho. Somente para campos de tipo password/senha */}
      {type2 === 'password' && (
        <Eye src={eyeOlho} alt="Eye logo" onClick={viewOrHideField} />
      )}
    </ContainerInput>
  )
}

import { ContainerInput, InputStyle, LabelStyle, Eye } from './style'
import { useState } from 'react'
import eyeOlho from '../../../assets/images/icons/eyeOlho.svg'

type TypeInput = {
  label: string
  placeholder: string
  type2: 'text' | 'email' | 'password'
  inputValueStateVar: string
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

//A variável de estado e a função que a altera serão passadas como prop
export const InputForm = ({
  label,
  placeholder,
  type2,
  inputValueStateVar,
  onInputChange
}: TypeInput) => {
  //const [inputValue, setInputValue] = useState('')
  const [typeEye, setTypeEye] = useState(type2)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setInputValue(event.target.value)
    onInputChange(event)
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
      <LabelStyle hasValue={inputValueStateVar.length > 0} htmlFor="">
        {label}
      </LabelStyle>
      <InputStyle
        hasValue={inputValueStateVar.length > 0}
        placeholder={placeholder}
        value={inputValueStateVar}
        onChange={handleInputChange}
        type={typeEye}
      />
      {/* Renderização condicional do olho. Somente para campos de tipo password/senha */}
      {type2 === 'password' && (
        <Eye src={eyeOlho} alt="Eye logo" onClick={viewOrHideField} />
      )}
    </ContainerInput>
    // <ContainerInput>
    //   <LabelStyle hasValue={inputValue.length > 0} htmlFor="">
    //     {label}
    //   </LabelStyle>
    //   <InputStyle
    //     hasValue={inputValue.length > 0}
    //     placeholder={placeholder}
    //     value={inputValue}
    //     onChange={handleInputChange}
    //     type={typeEye}
    //   />
    //   {/* Renderização condicional do olho. Somente para campos de tipo password/senha */}
    //   {type2 === 'password' && (
    //     <Eye src={eyeOlho} alt="Eye logo" onClick={viewOrHideField} />
    //   )}
    // </ContainerInput>
  )
}

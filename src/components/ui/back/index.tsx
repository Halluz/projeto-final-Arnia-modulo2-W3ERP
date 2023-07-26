import backIcon from '../../../assets/images/icons/leftArrow.svg'
import { ContainerBack } from './style'

type TypeBack = {
  content: string
}

export const Back = ({ content }: TypeBack) => {
  return (
    <ContainerBack>
      <img src={backIcon} alt="Ícone voltar" />
      <p>{content}</p>
    </ContainerBack>
  )
}

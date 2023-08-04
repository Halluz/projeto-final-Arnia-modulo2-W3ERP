import { Link } from 'react-router-dom'
import { ContainerNotAutorized } from './style'

export const NotAuthorized = () => {
  return (
    <ContainerNotAutorized>
      <h1>Não Autorizado.</h1>
      <Link to={'/'}>Voltar para página de login</Link>
    </ContainerNotAutorized>
  )
}

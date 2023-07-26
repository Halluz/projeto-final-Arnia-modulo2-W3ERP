import { InputForm } from '../input'
import { Link } from 'react-router-dom'
import {
  FormStyle,
  TitleH2,
  TitleH3,
  ContainerSpace24px,
  Container2,
  Label2,
  CheckBox,
  Container3
} from './style'
import Button2 from '../button-copy'
import { colors } from '@/assets/styles/colors'

export const FormLogin = () => {
  return (
    <FormStyle>
      <TitleH3>Seja bem vindo(a)!</TitleH3>
      <TitleH2>Realize seu Login</TitleH2>
      <ContainerSpace24px>
        <InputForm
          type2="email"
          label="E-mail"
          placeholder="Insira seu e-mail"
        />
        <InputForm
          type2="password"
          label="Senha"
          placeholder="Insira sua senha"
        />
      </ContainerSpace24px>
      <Container2>
        <Container3>
          <CheckBox type="checkbox" id="checkbox1" />
          <Label2 htmlFor="checkbox1">Lembrar-me</Label2>
        </Container3>
        <Link
          to="/login"
          style={{
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            textDecoration: 'none',
            color: 'rgba(97, 97, 97, 1)'
          }}
        >
          Esqueci minha senha
        </Link>
      </Container2>
      <Button2 heightProp="5.6rem">Entrar</Button2>
    </FormStyle>
  )
}

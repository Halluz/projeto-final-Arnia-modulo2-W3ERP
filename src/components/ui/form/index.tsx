import { InputForm } from '../input'
import { Link, useNavigate } from 'react-router-dom'
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
import { instanceLogin } from '@/config/services/functions'
import { useState } from 'react'
import { toLog } from '@/config/services/functions'

export const FormLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const systemNavigate = useNavigate()

  // Função para lidar com a mudança no campo de e-mail
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  // Função para lidar com a mudança no campo de senha
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault() // Previne o comportamento padrão de recarregar a página ao enviar o formulário

    /* const toLog = async (email: string, password: string) => {
      try {
        console.log(`email: ${email} | senha: ${password}`)
        const response = await instanceLogin.post(
          '/central/autenticacao/login',
          { email: email, senha: password }
        )
        console.log(`resposta da API: `, response)
        //verificar esta condição
        if (response) {
          systemNavigate('/mold/dashboardPage')
        }
      } catch (error) {
        console.log('Ocorreu um erro: ', error)
      }
    } */

    //chamada da função
    const response = await toLog(email, password)
    console.log('Código de status da requisição de login: ', response?.status)
    if (response?.status === 200) {
      systemNavigate('/mold/dashboardPage')
    } else {
      console.log('Falha na requisição de login: ', response)
      window.alert('Dados inválidos.')
    }
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <TitleH3>Seja bem vindo(a)!</TitleH3>
      <TitleH2>Realize seu Login</TitleH2>
      <ContainerSpace24px>
        <InputForm
          inputValueStateVar={email}
          onInputChange={handleEmailChange}
          type2="email"
          label="E-mail"
          placeholder="Insira seu e-mail"
        />
        <InputForm
          inputValueStateVar={password}
          onInputChange={handlePasswordChange}
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
      <Button2 type="submit" heightProp="5.6rem">
        Entrar
      </Button2>
    </FormStyle>
  )
}

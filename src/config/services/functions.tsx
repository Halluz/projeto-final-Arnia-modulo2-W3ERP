import axios, { isAxiosError } from 'axios'

const url = 'https://api.predict.app.br/v2/api-docs?group=APP' //endereço base remoto

export const instance = axios.create({
  baseURL: 'https://api.predict.app.br/v2/api-docs?group=APP',
  headers: { 'X-Custom-Header': 'foobar' }
})

export const instanceLogin = axios.create({
  baseURL: 'https://api.predict.app.br/',
  headers: {
    'X-TENANT-ID': 'arnia',
    'Content-Type': 'application/json'
  }
})

type TypeLoginResponse = {
  token: string
  type: string
}

export const toLog = async (email: string, password: string) => {
  try {
    console.log(`email: ${email} | senha: ${password}`)
    const response = await instanceLogin.post('/central/autenticacao/login', {
      email: email,
      senha: password
    })
    console.log(`resposta da API: `, response)

    if (response.status === 200) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('type', response.data.type)
      return response
    }
  } catch (error) {
    console.log('Ocorreu um erro: ', error)

    if (isAxiosError(error)) {
      //narrowing (seleção) para o tipo de erro Axios
      if (error.response?.status === 401) {
        throw new Error('Operação não autorizada')
      }
      if (error.response?.status === 403) {
        throw new Error('Usuário não tem permissão de acesso')
      }
      if (error.response?.status === 404) {
        throw new Error('Página não encontrada')
      }
    }
  }
}

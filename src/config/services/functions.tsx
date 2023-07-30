import axios, { isAxiosError } from 'axios'
import {
  TypeClientDashboard,
  TypeProductDashboard
} from '@/pages/dashboardPage'
export const instance = axios.create({
  baseURL: 'https://api.predict.app.br/',
  headers: {
    'X-TENANT-ID': 'arnia',
    'Content-Type': 'application/json',
    Authorization: `${localStorage.getItem('type')} ${localStorage.getItem(
      'token'
    )}`
  }
})

export const instanceLogin = axios.create({
  baseURL: 'https://api.predict.app.br/',
  headers: {
    'X-TENANT-ID': 'arnia',
    'Content-Type': 'application/json'
  }
})

type TypeLogin = {
  email: string
  senha: string
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

export const getDashboardClientsList = async (
  classification: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
) => {
  try {
    const response = await instance.get(
      `/app/dashboard/clientes&classificacao=${classification}`
    )
    if (response.status === 200) {
      console.log('RespostaAPI status 200: ', response.data)
      return response.data
    }
    return response
    console.log(response)
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

export const getDashboardProductsList = async (
  classification: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
) => {
  try {
    const response = await instance.get(
      `/app/dashboard/produtos&classificacao=${classification}`
    )
    if (response.status === 200) {
      console.log('RespostaAPI status 200: ', response.data)
      return response.data
    }
    return response
    console.log(response)
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

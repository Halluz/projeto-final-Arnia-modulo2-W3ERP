import { TypePanelDashboard } from '@/components/ui/panelDashboard'
import { TypeProductOfClientPage } from '@/pages/clientPage'
import {
  TypeClientDashboard,
  TypeProductDashboard
} from '@/pages/dashboardPage'
import { TypeClientOfProductPage } from '@/pages/productPage'
import { TypeProductOfPageProducts } from '@/pages/productsPage'
import axios, { isAxiosError } from 'axios'

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

export type TypeResumePanelPageProductOrPageClient = {
  media120Dias?: number
  nome?: string
  percentualUltimos30Dias?: number
  ultimos30Dias?: number
  ultimos60Dias?: number
  ultimos90Dias?: number
  ultimos120Dias?: number
}

export type UserMe = {
  email: string
  id: number
  nome: string
  papel: string
}

export type TypeProductsPageAPI = {
  content: TypeProductOfPageProducts[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
    unpaged: boolean
  }
  size: number
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  totalElements: number
  totalPages: number
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
      console.log('localStorage "token":', localStorage.getItem('token'))
      console.log('localStorage "type": ', localStorage.getItem('type'))
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
): Promise<TypeClientDashboard[]> => {
  try {
    const response = await instance.get(
      `/app/dashboard/clientes?&classificacao=${classification}`
    )
    console.log('RespostaAPI status 200: ', response.data)
    return response.data

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
    throw new Error('Página em manutenção.')
  }
}

export const getDashboardProductsList = async (
  classification: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
): Promise<TypeProductDashboard[]> => {
  try {
    const response = await instance.get(
      `/app/dashboard/produtos?&classificacao=${classification}`
    )
    console.log('RespostaAPI status 200: ', response.data)
    return response.data
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
    throw new Error('Página em manutenção.')
  }
}

export const getInfoPanelDashboard = async (): Promise<TypePanelDashboard> => {
  try {
    const response = await instance.get('/app/dashboard/resumo')
    return response.data
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
    throw new Error('Página não encontrada.')
  }
}

export const getUserMe = async (): Promise<UserMe> => {
  try {
    const response = await axios.get(
      'https://api.predict.app.br/central/usuario/me',
      {
        headers: {
          'X-TENANT-ID': 'arnia',
          'Content-Type': 'application/json',
          Authorization: `${localStorage.getItem(
            'type'
          )} ${localStorage.getItem('token')}`
        }
      }
    )
    console.log('UserMe: ', response)
    return response.data
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
    throw new Error('Página em manutenção.')
  }
}

export const logOut = () => {
  localStorage.removeItem('type')
  localStorage.removeItem('token')
  if (
    localStorage.getItem('type') === null ||
    localStorage.getItem('token') === null
  ) {
    window.location.href = `/`
  }
}

export const autorization = () => {
  if (
    localStorage.getItem('type') === null ||
    localStorage.getItem('token') === null ||
    localStorage.getItem('type') === '' ||
    localStorage.getItem('token') === ''
  ) {
    window.location.href = `/naoautorizado`
  }
}

export const getResumeProductPage = async (
  idProduct: string | undefined
): Promise<TypeResumePanelPageProductOrPageClient | undefined> => {
  try {
    const response = await instance.get(`/app/produto/${idProduct}/resumo`)
    console.log(response)
    return response.data
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
    throw new Error('Página em manutenção.')
  }
}

export const getClientsListOfProductPage = async (
  idProduct: string | undefined,
  classification: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
): Promise<TypeClientOfProductPage[]> => {
  try {
    const response = await instance.get(
      `/app/produto/${idProduct}/clientes?classificacao=${classification}`
    )
    console.log('Página Produto', response)
    return response.data
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
    throw new Error('Página em manutenção')
  }
}

export const getResumeClientPage = async (
  idClient: string | undefined
): Promise<TypeResumePanelPageProductOrPageClient> => {
  try {
    const response = await instance.get(`/app/cliente/${idClient}/resumo`)
    console.log('Resumo do painel da págian de Cliente: ', response.data)
    return response.data
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
    throw new Error('Página em manutenção.')
  }
}

export const getProductsListOfClientPage = async (
  idClient: string | undefined,
  classification: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
): Promise<TypeProductOfClientPage[]> => {
  try {
    const response = await instance.get(
      `/app/cliente/${idClient}/produtos?classificacao=${classification}`
    )
    return response.data
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
    throw new Error('Página em manutenção.')
  }
}

export const getProductsListOfPageProducts =
  async (): Promise<TypeProductsPageAPI> => {
    try {
      const response = await instance.get(`/app/produto?size=40`)
      return response.data
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
      throw new Error('Página em manutenção.')
    }
  }

import axios from 'axios'

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

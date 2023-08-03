import { Panel } from '@/components/ui/panel'
import { ContainerPage, ContainerTables, ContainerTable } from './style'
import { Table1 } from '@/components/ui/table1'

import { TableTitle } from '@/components/ui/tableTitle'
import downIcon from '../../assets/images/icons/downIcon.svg'
import trendingIcon from '../../assets/images/icons/trending-up.svg'

import { colors } from '@/assets/styles/colors'
import { Back } from '@/components/ui/back'
import { Table1Row } from '@/components/ui/table1Row'
import { useEffect, useState } from 'react'
import { autorization, getResumeProductPage } from '@/config/services/functions'
import { getClientsListOfProductPage } from '@/config/services/functions'
import { useParams } from 'react-router-dom'
import { TypeResumePanelPageProductOrPageClient } from '@/config/services/functions'

const vet = [
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 40
  },
  {
    atributo1: '002',
    atributo2: 'Espada',
    atributo3: -34
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 56.7
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: -19.3
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 40
  },
  {
    atributo1: '002',
    atributo2: 'Espada',
    atributo3: -34
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 56.7
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: -19.3
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 56.7
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: -19.3
  }
]

export type TypeClientOfProductPage = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}

export const ProductPage = () => {
  const [clientsListEmBaixa, setClientsListEmBaixa] = useState<
    TypeClientOfProductPage[]
  >([])
  const [clientsListEmAlta, setClientsListEmAlta] = useState<
    TypeClientOfProductPage[]
  >([])
  const { idProduct } = useParams() //captura o idProduct da url

  const [resumo, setResumo] = useState<
    TypeResumePanelPageProductOrPageClient | undefined
  >({
    media120Dias: 0,
    nome: 'Anônimo',
    percentualUltimos30Dias: 0,
    ultimos120Dias: 0,
    ultimos30Dias: 0,
    ultimos60Dias: 0,
    ultimos90Dias: 0
  })
  // const [stateIdProduct, setStateIdProduct] = useState<string | undefined>('')
  /* {
    media120Dias: 0,
    nome: 'Anônimo',
    percentualUltimos30Dias: 0,
    ultimos120Dias: 0,
    ultimos30Dias: 0,
    ultimos60Dias: 0,
    ultimos90Dias: 0
  } */

  useEffect(() => {
    autorization()
    // setStateIdProduct(idProduct)
    const getClientsListOfProductPage2 = async () => {
      const resumoProductPage = await getResumeProductPage(idProduct)
      setResumo(resumoProductPage)

      const responseEmbaixa = await getClientsListOfProductPage(
        idProduct,
        'EM_BAIXA'
      )
      setClientsListEmBaixa(responseEmbaixa)

      const responseEmAlta = await getClientsListOfProductPage(
        idProduct,
        'EM_ALTA'
      )
      setClientsListEmAlta(responseEmAlta)
    }
    getClientsListOfProductPage2()
  }, [])
  return (
    <ContainerPage>
      <Back content="Detalhamento" />
      <Panel resume={resumo} />
      <ContainerTables>
        <ContainerTable>
          <div>
            <TableTitle
              image={downIcon}
              title="Clientes em baixa"
              background={colors.error}
            />
          </div>
          <Table1 col1="ID" col2="Cliente" col3="Percentual" col4="Qtd">
            {clientsListEmBaixa.map((element, index) => (
              <Table1Row
                typeLink="client"
                key={`${index}${element.id}`}
                cell1={element.id}
                cell2={element.nome}
                cell3={
                  element.percentual > 0
                    ? `+${element.percentual}%`
                    : `${element.percentual}%`
                }
                cell4={element.quantidade}
              />
            ))}

            {/* {vet.map((element, index) => (
              <Table1Row
                typeLink="client"
                key={`${index}${element.atributo1}`}
                cell1={index}
                cell2={element.atributo2}
                cell3={
                  element.atributo3 > 0
                    ? `+${element.atributo3}%`
                    : `${element.atributo3}%`
                }
                cell4={index + 10}
              />
            ))} */}
          </Table1>
        </ContainerTable>
        <ContainerTable>
          <div>
            <TableTitle
              image={trendingIcon}
              title="Clientes em alta"
              background={colors.success}
            />
          </div>
          <Table1 col1="ID" col2="Cliente" col3="Percentual" col4="Qtd">
            {clientsListEmAlta.map((element, index) => (
              <Table1Row
                typeLink="client"
                key={`${index}${element.id}`}
                cell1={element.id}
                cell2={element.nome}
                cell3={
                  element.percentual > 0
                    ? `+${element.percentual}%`
                    : `${element.percentual}%`
                }
                cell4={element.quantidade}
              />
            ))}
            {/* {vet.map((element, index) => (
              <Table1Row
                typeLink="client"
                key={`${index}${element.atributo1}`}
                cell1={index}
                cell2={element.atributo2}
                cell3={
                  element.atributo3 > 0
                    ? `+${element.atributo3}%`
                    : `${element.atributo3}%`
                }
                cell4={index + 10}
              />
            ))} */}
          </Table1>
        </ContainerTable>
      </ContainerTables>
    </ContainerPage>
  )
}

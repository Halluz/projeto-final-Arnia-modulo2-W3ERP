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
import { useParams } from 'react-router-dom'
import {
  TypeResumePanelPageProductOrPageClient,
  autorization,
  getProductsListOfClientPage
} from '@/config/services/functions'
import { getResumeClientPage } from '@/config/services/functions'

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

export type TypeProductOfClientPage = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}

export const ClientPage = () => {
  const [resume, setResume] = useState<TypeResumePanelPageProductOrPageClient>({
    media120Dias: 0,
    nome: 'Anônimo',
    percentualUltimos30Dias: 0,
    ultimos120Dias: 0,
    ultimos30Dias: 0,
    ultimos60Dias: 0,
    ultimos90Dias: 0
  })
  const [productsListEmBaixa, setProductsListEmBaixa] = useState<
    TypeProductOfClientPage[]
  >([])
  const [productsListEmAlta, setProductsLlistEmAlta] = useState<
    TypeProductOfClientPage[]
  >([])
  const { idClient } = useParams()

  useEffect(() => {
    autorization()
    const getProductsListOfClientPage2 = async () => {
      const resumeClientPage = await getResumeClientPage(idClient)
      setResume(resumeClientPage)

      const responseEmBaixa = await getProductsListOfClientPage(
        idClient,
        'EM_BAIXA'
      )
      setProductsListEmBaixa(responseEmBaixa)
    }
    getProductsListOfClientPage2()
  }, [])

  return (
    <ContainerPage>
      <Back content="Detalhamento" />
      <Panel resume={resume} />
      <ContainerTables>
        <ContainerTable>
          <div>
            <TableTitle
              image={downIcon}
              title="Produtos em baixa"
              background={colors.error}
            />
          </div>
          <Table1 col1="ID" col2="Produto" col3="Percentual" col4="Qtd">
            {productsListEmBaixa.map((element, index) => (
              <Table1Row
                typeLink="product"
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
                typeLink="product"
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
              title="Produtos em alta"
              background={colors.success}
            />
          </div>
          <Table1 col1="ID" col2="Produto" col3="Percentual" col4="Qtd">
            {productsListEmAlta.map((element, index) => (
              <Table1Row
                typeLink="product"
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
                typeLink="product"
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

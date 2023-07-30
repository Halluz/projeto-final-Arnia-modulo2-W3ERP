import { PanelDashboard } from '@/components/ui/panel-dashboard'
import { ContainerPage, ContainerTables, ContainerTable } from './style'
import { Table1 } from '@/components/ui/table1'
import arrow from '../../assets/images/icons/rightArrow.svg'
import { TableTitle } from '@/components/ui/tableTitle'
import ImageProductsTable from '../../assets/images/icons/productsBlueLogo.svg'
import ImageClientsTable from '../../assets/images/icons/clientsLogo.svg'
import { colors } from '@/assets/styles/colors'
import { Table1Row } from '@/components/ui/table1Row'
import { ButtonToggle } from '@/components/ui/buttonToggle'
import { useState, useEffect } from 'react'
import {
  getDashboardClientsList,
  getDashboardProductsList
} from '@/config/services/functions'

export type TypeClientDashboard = {
  id: number
  nome: string
  percentual: number
}

export type TypeProductDashboard = {
  id: number
  nome: string
  percentual: number
}

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

export const DashboardPage = () => {
  const [productsList, setProductsList] = useState<TypeProductDashboard[]>([])
  const [clientsList, setClientsList] = useState<TypeClientDashboard[]>([])

  const [statusClients, setStatusClients] = useState<
    'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
  >('EM_ALTA')
  const [statusProducts, setStatusProducts] = useState<
    'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
  >('EM_ALTA')

  useEffect(() => {
    const getDashboardClientsList2 = async () => {
      const response = await getDashboardClientsList(statusClients)
      setClientsList(response)
    }
    getDashboardClientsList2()
  }, [statusClients])

  useEffect(() => {
    const getDashboardProductsList2 = async () => {
      const response = await getDashboardProductsList(statusProducts)
      setProductsList(response)
    }
  }, [statusProducts])

  return (
    <ContainerPage>
      <PanelDashboard />
      <ContainerTables>
        <ContainerTable>
          <div>
            <TableTitle
              image={ImageProductsTable}
              title="Produtos"
              background={colors.azul4}
            />
            <ButtonToggle
              status={statusProducts}
              setStatus={setStatusProducts}
            />
          </div>
          <Table1 col1="ID" col2="Produto" col3="Percentual" col4="">
            {productsList.map((element, index) => (
              <Table1Row
                key={`${index}${element.id}`}
                cell1={element.id}
                cell2={element.nome}
                cell3={
                  element.percentual > 0
                    ? `+${element.percentual}%`
                    : `${element.percentual}%`
                }
                cell4={<img src={arrow} alt="Seta direita" />}
              />
            ))}
          </Table1>
        </ContainerTable>
        <ContainerTable>
          <div>
            <TableTitle
              image={ImageClientsTable}
              title="Clientes"
              background={colors.primaryBlue}
            />
            <ButtonToggle status={statusClients} setStatus={setStatusClients} />
          </div>
          <Table1 col1="ID" col2="Cliente" col3="Percentual" col4="">
            {clientsList.map((element, index) => (
              <Table1Row
                key={`${index}${element.id}`}
                cell1={element.id}
                cell2={element.nome}
                cell3={
                  element.percentual > 0
                    ? `+${element.percentual}%`
                    : `${element.percentual}%`
                }
                cell4={<img src={arrow} alt="Imagem seta direita" />}
              />
            ))}
          </Table1>
        </ContainerTable>
      </ContainerTables>
    </ContainerPage>
  )
}

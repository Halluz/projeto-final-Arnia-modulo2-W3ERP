import { ContainerPage, ContainerTables, ContainerTable } from './style'
import { Table2 } from '@/components/ui/table2'
import { TableTitle } from '@/components/ui/tableTitle'
import historicIcon from '../../assets/images/icons/historicIcon.svg'
import esgotandoIcon from '../../assets/images/icons/esgotandoIcon.svg'
import { colors } from '@/assets/styles/colors'
import { Back } from '@/components/ui/back'
import { Table2Row } from '@/components/ui/table2Row'
import checkOne from '../../assets/images/icons/check-oneDarBaixa.svg'
import { Table3 } from '@/components/ui/table3'
import { Table3Row } from '@/components/ui/table3Row'
import { CheckOneComponent } from '@/components/ui/checkOne'
import { PanelPrediction } from '@/components/ui/panelPredictionClientPage'
import { useEffect, useState } from 'react'
import {
  autorization,
  getEsgotandoAPI,
  getHistoricAPI
} from '@/config/services/functions'
import { useParams, useNavigate } from 'react-router-dom'

const vet1 = [
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico Buffy',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico Buffy',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico Buffy',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico Buffy',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico Buffy',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: '25/07/2023',
    atributo4: 123,
    atributo5: <CheckOneComponent />
  }
]

const vet2 = [
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  },
  {
    atributo1: '002',
    atributo2: 'Copo de vidro',
    atributo3: '03/06/2023',
    atributo4: '03/08/2023',
    atributo5: 453,
    atributo6: <CheckOneComponent />
  }
]

const initial: TypeHistoricAPI = {
  content: [
    {
      id: 0,
      nome: 'Anônimo',
      quantidade: 0,
      ultimaCompra: '2023-08-03T21:52:50.571Z'
    }
  ],
  empty: true,
  first: true,
  last: true,
  number: 0,
  numberOfElements: 0,
  pageable: {
    offset: 0,
    pageNumber: 0,
    pageSize: 0,
    paged: true,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true
    },
    unpaged: true
  },
  size: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true
  },
  totalElements: 0,
  totalPages: 0
}

export type TypeProductHistoric = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string // verificar => '2023-08-03T21:52:50.571Z'
}

export type TypeHistoricAPI = {
  content: TypeProductHistoric[]
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

export type TypeProductEsgotando = {
  id: number
  nome: string
  proximaCompra: string
  quantidade: number
  ultimaCompra: string
}

export type TypeEsgotandoAPI = {
  content: TypeProductEsgotando[]
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

export const PredictionClientPage = () => {
  //"/mold/predicaoClientPage/:idClient/:clientName/:tel/:email"
  const [historic, setHistoric] = useState<TypeHistoricAPI>(initial)
  const [listProductsHistoric, setListProductsHistoric] = useState<
    TypeProductHistoric[]
  >([])
  const [esgotando, setEsgotando] = useState<TypeEsgotandoAPI>()
  const [listProductsEsgotando, setListProductsEsgotando] = useState<
    TypeProductEsgotando[]
  >([])

  const { idClient, clientName, tel, email } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const authorized = autorization()
    if (authorized) {
      const helperAsyncFunction = async () => {
        const responseHistoric = await getHistoricAPI(idClient)
        setHistoric(responseHistoric)
        console.log('Histórico aqui: ', responseHistoric)
        setListProductsHistoric(responseHistoric.content)
        // setListProductsHistoric(historic.content)

        const responseEsgotando = await getEsgotandoAPI(idClient)
        setEsgotando(responseEsgotando)
        setListProductsEsgotando(responseEsgotando.content)
      }
      helperAsyncFunction()
    } else {
      navigate('/naoautorizado')
    }
  }, [])
  return (
    <ContainerPage>
      <Back content="Detalhamento" />
      <PanelPrediction
        clientName={clientName}
        clientPhoneNumber={tel}
        clientEmail={email}
      />
      <ContainerTables>
        <ContainerTable>
          <div>
            <TableTitle
              image={historicIcon}
              title="Histórico"
              background={colors.grey200}
            />
          </div>
          <Table2
            col1="ID"
            col2="Produto"
            col3="Última compra"
            col4="Qtd"
            col5="Dar baixa"
          >
            {listProductsHistoric.map((element, index) => (
              <Table2Row
                key={`${index}${element.id}`}
                cell1={String(element.id)}
                cell2={element.nome}
                cell3={element.ultimaCompra}
                cell4={element.quantidade}
                cell5={<CheckOneComponent />}
              />
            ))}
            {/* {vet1.map((element, index) => (
              <Table2Row
                key={`${index}${element.atributo1}`}
                cell1={element.atributo1}
                cell2={element.atributo2}
                cell3={element.atributo3}
                cell4={element.atributo4}
                cell5={element.atributo5}
              />
            ))} */}
          </Table2>
        </ContainerTable>
        <ContainerTable>
          <div>
            <TableTitle
              image={esgotandoIcon}
              title="Produtos esgotando"
              background={colors.lightRed}
            />
          </div>
          <Table3
            col1="ID"
            col2="Produto"
            col3="última compra"
            col4="Próxima compra"
            col5="Qtd"
            col6={'Dar baixa'}
          >
            {listProductsEsgotando.map((element, index) => (
              <Table3Row
                key={`${index}${element.id}`}
                cell1={String(element.id)}
                cell2={element.nome}
                cell3={element.ultimaCompra}
                cell4={element.proximaCompra}
                cell5={element.quantidade}
                cell6={<CheckOneComponent />}
              />
            ))}
            {/* {vet2.map((element, index) => (
              <Table3Row
                key={`${index}${element.atributo1}`}
                cell1={element.atributo1}
                cell2={element.atributo2}
                cell3={element.atributo3}
                cell4={element.atributo4}
                cell5={element.atributo5}
                cell6={element.atributo6}
              />
            ))} */}
          </Table3>
        </ContainerTable>
      </ContainerTables>
    </ContainerPage>
  )
}

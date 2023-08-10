import { ContainerPage, ContainerTable, TitlePage } from './style'
import { Table1 } from '@/components/ui/table1'
import { SearchBar } from '@/components/ui/searchBar'
import { Table1Row } from '@/components/ui/table1Row'
import { Status, TypeStatus } from '@/components/ui/status'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TypeProductsPageAPI,
  autorization,
  getProductsListOfPageProducts
} from '@/config/services/functions'
import Pagination from '@/components/ui/Pagination'

type TypeVet2 = {
  atributo1: string
  atributo2: string
  atributo3: TypeStatus['status']
  atributo4: number
}

const vet2: TypeVet2[] = [
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: 40
  },
  {
    atributo1: '002',
    atributo2: 'Espada',
    atributo3: 'EM_BAIXA',
    atributo4: -34
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'NEUTRO',
    atributo4: 56.7
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: -19.3
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: 40
  },
  {
    atributo1: '002',
    atributo2: 'Espada',
    atributo3: 'EM_BAIXA',
    atributo4: -34
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'NEUTRO',
    atributo4: 56.7
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: -19.3
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: 40
  },
  {
    atributo1: '002',
    atributo2: 'Espada',
    atributo3: 'EM_BAIXA',
    atributo4: -34
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'NEUTRO',
    atributo4: 56.7
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: -19.3
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: 40
  },
  {
    atributo1: '002',
    atributo2: 'Espada',
    atributo3: 'EM_BAIXA',
    atributo4: -34
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'NEUTRO',
    atributo4: 56.7
  },
  {
    atributo1: '001',
    atributo2: 'Papel Higiênico',
    atributo3: 'EM_ALTA',
    atributo4: -19.3
  }
]

const initial: TypeProductsPageAPI = {
  content: [
    {
      classificacao: 'NEUTRO',
      id: 0,
      nome: 'Anônimo',
      percentual: 0
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

export type TypeProductOfPageProducts = {
  classificacao: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
  id: number
  nome: string
  percentual: number
}

export const ProductsPage = () => {
  const [responseProductsPage, setResponseProductsPage] =
    useState<TypeProductsPageAPI>(initial)
  const [productsList, setProductsList] = useState<TypeProductOfPageProducts[]>(
    []
  )
  const [parameters, setParameters] = useState('')
  const [keyWord, setKeyWord] = useState('') // Palavra-chave
  const [classification, setClassification] = useState<
    | '&classificacao=EM_ALTA'
    | '&classificacao=EM_BAIXA'
    | '&classificacao=NEUTRO'
    | ''
  >('')
  const [currentPage, setCurrentPage] = useState(
    responseProductsPage.pageable.pageNumber
  ) // 0
  const [totalPages, setTotalPages] = useState(responseProductsPage.totalPages)
  const [totalElements, setTotalElements] = useState(
    responseProductsPage.totalElements
  )

  let letParameters = `${classification}${keyWord}&page=${currentPage}`
  if (letParameters !== parameters) {
    setParameters(letParameters)
  }

  const navigate = useNavigate()

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const authorized = autorization()
    if (authorized) {
      const getProductsListOfPageProducts2 = async () => {
        console.log('Valor de parameters no productsPage: ', parameters)
        const responseProductsList = await getProductsListOfPageProducts(
          parameters
        )
        console.log(
          'Resposta API página de Produtos (no plural): ',
          responseProductsList
        )
        setResponseProductsPage(responseProductsList)
        setProductsList(responseProductsList.content)
      }
      getProductsListOfPageProducts2()
    } else {
      navigate('/naoautorizado')
    }
  }, [parameters])
  return (
    <ContainerPage>
      <TitlePage>Produtos</TitlePage>
      <ContainerTable>
        <div>
          <SearchBar
            classificationStateVariable={classification}
            setClassificationStateVariable={setClassification}
            keyWord={keyWord}
            setKeyWord={setKeyWord}
          />
        </div>
        <Table1 col1="ID" col2="Produtos" col3="Status" col4="Percentual">
          {productsList.map((element, index) => (
            <Table1Row
              typeLink="product"
              key={`${index}${element.id}`}
              cell1={element.id}
              cell2={element.nome}
              cell3={<Status status={element.classificacao} />}
              cell4={
                element.percentual > 0
                  ? `+${element.percentual}%`
                  : `${element.percentual}%`
              }
              lineHeight="8rem"
            />
          ))}
          <Pagination
            totalElements={totalElements}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          {/* {vet2.map((element, index) => (
            <Table1Row
              typeLink="product"
              key={`${index}${element.atributo1}`}
              cell1={index}
              cell2={element.atributo2}
              cell3={<Status status={element.atributo3} />}
              cell4={
                element.atributo4 > 0
                  ? `+${element.atributo4}%`
                  : `${element.atributo4}%`
              }
              lineHeight="8rem"
            />
          ))} */}
        </Table1>
      </ContainerTable>
      {/* <ContainerTable>
        <div>
          <SearchBar />
        </div>
        <Table1 col1="ID" col2="Produtos" col3="Status" col4="Percentual">
          {vet2.map((element, index) => (
            <Table1Row
              key={`${index}${element.atributo1}`}
              cell1={index}
              cell2={element.atributo2}
              cell3={<Status status={element.atributo3} />}
              cell4={
                element.atributo4 > 0
                  ? `+${element.atributo4}%`
                  : `${element.atributo4}%`
              }
              lineHeight="8rem"
            />
          ))}
        </Table1>
      </ContainerTable> */}
    </ContainerPage>
  )
}

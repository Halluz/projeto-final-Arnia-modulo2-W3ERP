import { ContainerPage, ContainerTable, TitlePage } from './style'
import { Table1 } from '@/components/ui/table1'
import { SearchBar } from '@/components/ui/searchBar'
import { Table1Row } from '@/components/ui/table1Row'
import { Status, TypeStatus } from '@/components/ui/status'
import Button2 from '@/components/ui/button-copy'

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

type TypeProductPageProducts = {
  content: [
    {
      classificacao: 'EM_ALTA'
      id: 0
      nome: 'string'
      percentual: 0
    }
  ]
  empty: true
  first: true
  last: true
  number: 0
  numberOfElements: 0
  pageable: {
    offset: 0
    pageNumber: 0
    pageSize: 0
    paged: true
    sort: {
      empty: true
      sorted: true
      unsorted: true
    }
    unpaged: true
  }
  size: 0
  sort: {
    empty: true
    sorted: true
    unsorted: true
  }
  totalElements: 0
  totalPages: 0
}
export const ProductsPage = () => {
  return (
    <ContainerPage>
      <TitlePage>Produtos</TitlePage>
      <ContainerTable>
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

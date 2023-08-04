import { CardPredictions } from '@/components/ui/Cardpredictions'
import {
  ContainerPage,
  //ContainerTable,
  TitlePage,
  DivHeader,
  ContainerCardsPrediction
} from './style'
import { SearchBar } from '@/components/ui/searchBar'
import {
  TableRowCardPrediction,
  TypeTableRowCardPredition
} from '@/components/ui/TableRowCardPrediction'
import { TableCardPrediction } from '@/components/ui/TableCardPrediction'
import { useEffect, useState } from 'react'
import {
  autorization,
  getPredictionsPageAPI
} from '@/config/services/functions'

type TypeMocadoProduct = {
  productName: string
  nextBuyDate: string
}

type TypeMocadoPredictionsClientCard = {
  clientName: string
  clientStatus: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
  productsList: TypeMocadoProduct[]
}

const vet2: TypeMocadoPredictionsClientCard[] = [
  {
    clientName: 'Coca-Cola',
    clientStatus: 'EM_ALTA',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'Microsoft',
    clientStatus: 'NEUTRO',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      }
    ]
  },
  {
    clientName: 'SPOTFY',
    clientStatus: 'EM_BAIXA',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'NETFLIX',
    clientStatus: 'EM_ALTA',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'PRATS',
    clientStatus: 'EM_BAIXA',
    productsList: [
      {
        productName: 'Suco de Uva',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'Brunela',
    clientStatus: 'NEUTRO',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'Coca-Cola',
    clientStatus: 'EM_ALTA',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'Coca-Cola',
    clientStatus: 'EM_ALTA',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'Coca-Cola',
    clientStatus: 'EM_BAIXA',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'Coca-Cola',
    clientStatus: 'NEUTRO',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  },
  {
    clientName: 'Coca-Cola',
    clientStatus: 'EM_ALTA',
    productsList: [
      {
        productName: 'Fanta',
        nextBuyDate: '20/07/2023'
      },
      {
        productName: 'Suco de Pêssego Delvale',
        nextBuyDate: '22/07/2023'
      },
      {
        productName: 'Sprite',
        nextBuyDate: '25/07/2023'
      },
      {
        productName: 'Energético',
        nextBuyDate: '24/07/2023'
      },
      {
        productName: 'Coca-Cola Lata zero',
        nextBuyDate: '20/07/2023'
      }
    ]
  }
]

export type TypeProductTableCardPreditions = {
  id: number
  nome: string
  proximaCompra: string
}

export type TypeCardPredictions = {
  classificacao: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
  email: string
  id: number
  nome: string
  percentual: number
  produtos: TypeProductTableCardPreditions[]
  telefone: string
  whatsapp: string
}

export type TypePredictionsPageAPI = {
  content: TypeCardPredictions[]
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

const initial: TypePredictionsPageAPI = {
  content: [
    {
      classificacao: 'NEUTRO',
      email: 'Anônimo@anonimo.com',
      id: 0,
      nome: 'Anônimo',
      percentual: 0,
      produtos: [
        {
          id: 0,
          nome: 'string',
          proximaCompra: 'string'
        }
      ],
      telefone: 'string',
      whatsapp: 'string'
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

export const PredictionsPage = () => {
  const [responsePredictionsPage, setResponsePreditionsPage] =
    useState<TypePredictionsPageAPI>(initial)
  const [vetCardPredictions, setVetCardPredictions] = useState<
    TypeCardPredictions[]
  >([])
  useEffect(() => {
    autorization()
    const getPredictionsPageAPI2 = async () => {
      const response = await getPredictionsPageAPI()
      setResponsePreditionsPage(response)
      setVetCardPredictions(response.content)
    }
    getPredictionsPageAPI2()
  }, [])
  return (
    <ContainerPage>
      <TitlePage>Predições</TitlePage>
      <DivHeader>
        <SearchBar />
      </DivHeader>
      <ContainerCardsPrediction>
        {vetCardPredictions.map((element, index) => (
          <CardPredictions
            key={`${index}${element.id}`}
            clientName={element.nome}
            clientStatus={element.classificacao}
            idClient={String(element.id)}
            clientTel={element.telefone}
            clientEmail={element.email}
          >
            <TableCardPrediction col1Name="Produto" col2Name="Prox. compra">
              {element.produtos.map((product, index) => (
                <TableRowCardPrediction
                  key={`${index}${product.id}`}
                  cell1={product.nome}
                  cell2={product.proximaCompra}
                />
              ))}
            </TableCardPrediction>
          </CardPredictions>
        ))}

        {/* {vet2.map((element, index) => (
          <CardPredictions
            key={`${index}${element.clientName}`}
            clientName={element.clientName}
            clientStatus={element.clientStatus}
          >
            <TableCardPrediction col1Name="Produto" col2Name="Prox. compra">
              {element.productsList.map((product, index) => (
                <TableRowCardPrediction
                  key={`${index}${product.productName}`}
                  cell1={product.productName}
                  cell2={product.nextBuyDate}
                />
              ))}
            </TableCardPrediction>
          </CardPredictions>
        ))} */}
      </ContainerCardsPrediction>
    </ContainerPage>
  )
}

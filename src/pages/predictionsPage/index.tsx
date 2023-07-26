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

export const PredictionsPage = () => {
  return (
    <ContainerPage>
      <TitlePage>Predições</TitlePage>
      <DivHeader>
        <SearchBar />
      </DivHeader>
      <ContainerCardsPrediction>
        {vet2.map((element, index) => (
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
        ))}
      </ContainerCardsPrediction>
    </ContainerPage>
  )
}

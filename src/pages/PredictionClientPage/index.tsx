import { Panel } from '@/components/ui/panel'
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
import { useEffect } from 'react'
import { autorization } from '@/config/services/functions'

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

export const PredictionClientPage = () => {
  useEffect(() => {
    autorization()
  }, [])
  return (
    <ContainerPage>
      <Back content="Detalhamento" />
      <PanelPrediction
        clientName="Hotel Ibis"
        clientPhoneNumber="31 99468-9894"
        clientEmail="hotelibis@gmail.com"
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
            {vet1.map((element, index) => (
              <Table2Row
                key={`${index}${element.atributo1}`}
                cell1={element.atributo1}
                cell2={element.atributo2}
                cell3={element.atributo3}
                cell4={element.atributo4}
                cell5={element.atributo5}
              />
            ))}
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
            {vet2.map((element, index) => (
              <Table3Row
                key={`${index}${element.atributo1}`}
                cell1={element.atributo1}
                cell2={element.atributo2}
                cell3={element.atributo3}
                cell4={element.atributo4}
                cell5={element.atributo5}
                cell6={element.atributo6}
              />
            ))}
          </Table3>
        </ContainerTable>
      </ContainerTables>
    </ContainerPage>
  )
}

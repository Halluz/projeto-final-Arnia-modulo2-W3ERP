import { Panel } from '@/components/ui/panel'
import { ContainerPage, ContainerTables, ContainerTable } from './style'
import { Table1 } from '@/components/ui/table1'

import { TableTitle } from '@/components/ui/tableTitle'
import downIcon from '../../assets/images/icons/downIcon.svg'
import trendingIcon from '../../assets/images/icons/trending-up.svg'

import { colors } from '@/assets/styles/colors'
import { Back } from '@/components/ui/back'
import { Table1Row } from '@/components/ui/table1Row'

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

export const ProductPage = () => {
  return (
    <ContainerPage>
      <Back content="Detalhamento" />
      <Panel panelTitle="Nome do Produto" />
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
            {vet.map((element, index) => (
              <Table1Row
                key={`${index}${element.atributo1}`}
                cell1={element.atributo1}
                cell2={element.atributo2}
                cell3={
                  element.atributo3 > 0
                    ? `+${element.atributo3}%`
                    : `${element.atributo3}%`
                }
                cell4={index + 10}
              />
            ))}
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
            {vet.map((element, index) => (
              <Table1Row
                key={`${index}${element.atributo1}`}
                cell1={element.atributo1}
                cell2={element.atributo2}
                cell3={
                  element.atributo3 > 0
                    ? `+${element.atributo3}%`
                    : `${element.atributo3}%`
                }
                cell4={index + 10}
              />
            ))}
          </Table1>
        </ContainerTable>
      </ContainerTables>
    </ContainerPage>
  )
}

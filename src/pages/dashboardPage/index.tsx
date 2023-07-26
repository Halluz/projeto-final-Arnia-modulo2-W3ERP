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
            <ButtonToggle />
          </div>
          <Table1 col1="ID" col2="Produto" col3="Percentual" col4="">
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
            <ButtonToggle />
          </div>
          <Table1 col1="ID" col2="Cliente" col3="Percentual" col4="">
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
                cell4={<img src={arrow} alt="Imagem seta direita" />}
              />
            ))}
          </Table1>
        </ContainerTable>
      </ContainerTables>
    </ContainerPage>
  )
}

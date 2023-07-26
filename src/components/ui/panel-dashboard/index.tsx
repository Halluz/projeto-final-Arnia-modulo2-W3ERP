import { ContainerCards, ContainerPanelDashboard, TitlePanel } from './style'
import { Card } from '../card'
import { CalendarButton } from '../calendarButton'

export const PanelDashboard = () => {
  return (
    <ContainerPanelDashboard>
      <TitlePanel>
        Dashboard <CalendarButton />
      </TitlePanel>

      <ContainerCards>
        <Card graphPercentage={80} variation={+20} quantity={140}>
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            produtos{' '}
          </span>
          em alta{' '}
        </Card>
        <Card graphPercentage={20} variation={-30} quantity={28}>
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            produtos{' '}
          </span>
          em baixa
        </Card>
        <Card graphPercentage={73} variation={+43} quantity={400}>
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            clientes{' '}
          </span>
          em alta
        </Card>
        <Card graphPercentage={-10} variation={-26} quantity={67}>
          Total{' '}
          <span style={{ fontWeight: '600', letterSpacing: '0.02rem' }}>
            Clientes{' '}
          </span>
          em baixa
        </Card>
      </ContainerCards>
    </ContainerPanelDashboard>
  )
}

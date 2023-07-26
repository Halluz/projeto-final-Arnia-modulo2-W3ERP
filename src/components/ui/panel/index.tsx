import { ContainerCards, ContainerPanel, TitlePanel } from './style'
import { Card2 } from '../card2'
import { colors } from '@/assets/styles/colors'

type TypePanel = {
  panelTitle: string
}

export const Panel = ({ panelTitle }: TypePanel) => {
  return (
    <ContainerPanel>
      <TitlePanel>{panelTitle}</TitlePanel>

      <ContainerCards>
        <Card2
          variation={+20}
          quantity={300}
          info="Média 120 dias"
          colorInfoCard2={colors.white}
          backgroundCard2={colors.primaryBlue}
          colorQuantityCard2={colors.white}
        />
        <Card2
          variation={-30}
          colorQuantityCard2={colors.primaryBlue}
          info="Últimos 30 dias"
          colorInfoCard2={colors.grey900}
          backgroundCard2={colors.white}
          quantity={222}
        />
        <Card2
          variation={+43}
          info="Últimos 60 dias"
          colorInfoCard2={colors.grey900}
          quantity={400}
          colorQuantityCard2={colors.grey900}
          backgroundCard2={colors.white}
        />
        <Card2
          variation={+43}
          info="Últimos 90 dias"
          colorInfoCard2={colors.grey900}
          quantity={400}
          colorQuantityCard2={colors.grey900}
          backgroundCard2={colors.white}
        />
      </ContainerCards>
    </ContainerPanel>
  )
}

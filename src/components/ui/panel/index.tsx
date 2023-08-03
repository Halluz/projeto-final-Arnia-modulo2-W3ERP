import { ContainerCards, ContainerPanel, TitlePanel } from './style'
import { Card2 } from '../card2'
import { colors } from '@/assets/styles/colors'
import { TypeResumePanelPageProductOrPageClient } from '@/config/services/functions'

/* {
  media120Dias: 0,
  nome: 'Anônimo',
  percentualUltimos30Dias: 0,
  ultimos120Dias: 0,
  ultimos30Dias: 0,
  ultimos60Dias: 0,
  ultimos90Dias: 0
} */

type TypePanel = {
  resume: TypeResumePanelPageProductOrPageClient | undefined
}

export const Panel = ({ resume }: TypePanel) => {
  return (
    <ContainerPanel>
      <TitlePanel>{resume?.nome}</TitlePanel>

      <ContainerCards>
        <Card2
          quantity={resume?.media120Dias}
          info="Média 120 dias"
          colorInfoCard2={colors.white}
          backgroundCard2={colors.primaryBlue}
          colorQuantityCard2={colors.white}
        />
        <Card2
          colorQuantityCard2={colors.primaryBlue}
          info="Últimos 30 dias"
          colorInfoCard2={colors.grey900}
          backgroundCard2={colors.white}
          quantity={resume?.ultimos30Dias}
        />
        <Card2
          info="Últimos 60 dias"
          colorInfoCard2={colors.grey900}
          quantity={resume?.ultimos60Dias}
          colorQuantityCard2={colors.primaryBlue}
          backgroundCard2={colors.white}
        />
        <Card2
          info="Últimos 90 dias"
          colorInfoCard2={colors.grey900}
          quantity={resume?.ultimos90Dias}
          colorQuantityCard2={colors.primaryBlue}
          backgroundCard2={colors.white}
        />
        <Card2
          info="Últimos 120 dias"
          colorInfoCard2={colors.grey900}
          quantity={resume?.ultimos120Dias}
          colorQuantityCard2={colors.primaryBlue}
          backgroundCard2={colors.white}
        />
      </ContainerCards>
    </ContainerPanel>
  )
}

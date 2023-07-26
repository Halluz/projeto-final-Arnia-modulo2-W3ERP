import {
  Circle,
  ContainerCardPrediction,
  ContainerClientNameAndStatus,
  HeaderCardPrediction,
  Item,
  MarkerStyle,
  ProfileCardPrediction
} from './style'
import clientIcon from '../../../assets/images/icons/IconeClientCardPrediction.svg'
import rightArrow from '../../../assets/images/icons/rightArrow.svg'
import { ReactNode } from 'react'
import marker from '../../../assets/images/icons/marker.svg'

type TypePredictionsClientCard = {
  children: ReactNode
  clientName: string
  clientStatus: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
}

export const CardPredictions = ({
  children,
  clientName,
  clientStatus
}: TypePredictionsClientCard) => {
  return (
    <ContainerCardPrediction>
      <HeaderCardPrediction>
        <ProfileCardPrediction>
          <Circle>
            <img src={clientIcon} alt="Ícone Cliente" />
          </Circle>
          <ContainerClientNameAndStatus>
            <h2>{clientName}</h2>
            <ul>
              <Item status={clientStatus}>
                <MarkerStyle
                  status={clientStatus}
                  src={marker}
                  alt="Marcador"
                />{' '}
                {clientStatus}
              </Item>
            </ul>
          </ContainerClientNameAndStatus>
        </ProfileCardPrediction>

        <img src={rightArrow} alt="Imagem seta avançar" />
      </HeaderCardPrediction>
      {children}
    </ContainerCardPrediction>
  )
}

import {
  Circle,
  ContainerCardPrediction,
  ContainerClientNameAndStatus,
  HeaderCardPrediction,
  Item,
  MarkerStyle,
  ProfileCardPrediction,
  LinkCardPrediction
} from './style'
import clientIcon from '../../../assets/images/icons/IconeClientCardPrediction.svg'
import rightArrow from '../../../assets/images/icons/rightArrow.svg'
import { ReactNode } from 'react'
import marker from '../../../assets/images/icons/marker.svg'
import { Link } from 'react-router-dom'

type TypePredictionsClientCard = {
  children: ReactNode
  clientName: string
  clientStatus: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
  idClient: string
  clientEmail: string
  clientTel: string
}

export const CardPredictions = ({
  children,
  clientName,
  clientStatus,
  idClient,
  clientEmail,
  clientTel
}: TypePredictionsClientCard) => {
  return (
    <ContainerCardPrediction>
      <LinkCardPrediction
        to={`/mold/predicaoClientPage/${idClient}/${clientName}/${clientTel}/${clientEmail}`}
      >
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
      </LinkCardPrediction>
      {children}
    </ContainerCardPrediction>
  )
}

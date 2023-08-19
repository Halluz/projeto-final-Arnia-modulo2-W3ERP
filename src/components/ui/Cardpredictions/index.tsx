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
import markerGreen from '../../../assets/images/icons/markerGreen.svg'
import markerRed from '../../../assets/images/icons/markerRed.svg'
import markerGrey from '../../../assets/images/icons/markerGrey.svg'

type TypePredictionsClientCard = {
  children: ReactNode
  clientName: string
  clientStatus: 'EM_ALTA' | 'EM ALTA' | 'EM_BAIXA' | 'EM BAIXA' | 'NEUTRO'
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
                  {clientStatus === 'EM_ALTA' || clientStatus === 'EM ALTA' ? (
                    <MarkerStyle
                      status={clientStatus}
                      src={markerGreen}
                      alt="Marcador"
                    />
                  ) : clientStatus === 'EM_BAIXA' ||
                    clientStatus === 'EM BAIXA' ? (
                    <MarkerStyle
                      status={clientStatus}
                      src={markerRed}
                      alt="Marcador"
                    />
                  ) : (
                    <MarkerStyle
                      status={clientStatus}
                      src={markerGrey}
                      alt="Marcador"
                    />
                  )}{' '}
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

import phoneLogo from '../../../assets/images/icons/phoneLogo.svg'
import emailLogo from '../../../assets/images/icons/emailLogo.svg'
import {
  ContainerPanelPredictionClient,
  TitlePanelPrediction,
  ContainerPanelPredictionClient2,
  ContainerPanelPredictionClient3
} from './style'

type TypePanelPrediction = {
  clientName: string
  clientPhoneNumber: string
  clientEmail: string
}

export const PanelPrediction = ({
  clientName,
  clientPhoneNumber,
  clientEmail
}: TypePanelPrediction) => {
  return (
    <ContainerPanelPredictionClient>
      <TitlePanelPrediction>{clientName}</TitlePanelPrediction>
      <ContainerPanelPredictionClient2>
        <ContainerPanelPredictionClient3>
          <img src={phoneLogo} alt="Logo de telefone" />
          {clientPhoneNumber}
        </ContainerPanelPredictionClient3>
        <ContainerPanelPredictionClient3>
          <img src={emailLogo} alt="Logo e-mail" />
          {clientEmail}
        </ContainerPanelPredictionClient3>
      </ContainerPanelPredictionClient2>
    </ContainerPanelPredictionClient>
  )
}

import phoneLogo from '../../../assets/images/icons/phoneLogo.svg'
import emailLogo from '../../../assets/images/icons/emailLogo.svg'
import {
  ContainerPanelPredictionClient,
  TitlePanelPrediction,
  ContainerPanelPredictionClient2,
  ContainerPanelPredictionClient3
} from './style'

type TypePanelPrediction = {
  clientName: string | undefined | null
  clientPhoneNumber: string | undefined | null
  clientEmail: string | undefined | null
}

export const PanelPrediction = ({
  clientName,
  clientPhoneNumber,
  clientEmail
}: TypePanelPrediction) => {
  console.log(
    `Valores das props do componente "PanelPrediction": clientName=${clientName}; clientPhoneNumber=${clientPhoneNumber}; clientEmail=${clientEmail}`
  )

  return (
    <ContainerPanelPredictionClient>
      <TitlePanelPrediction>{clientName}</TitlePanelPrediction>
      <ContainerPanelPredictionClient2>
        {clientPhoneNumber ? (
          <ContainerPanelPredictionClient3>
            <img src={phoneLogo} alt="Logo de telefone" />
            {clientPhoneNumber}
          </ContainerPanelPredictionClient3>
        ) : null}

        {clientEmail ? (
          <ContainerPanelPredictionClient3>
            <img src={emailLogo} alt="Logo e-mail" />
            {clientEmail}
          </ContainerPanelPredictionClient3>
        ) : null}
      </ContainerPanelPredictionClient2>
    </ContainerPanelPredictionClient>
  )
}

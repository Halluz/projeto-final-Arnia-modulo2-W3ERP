import {
  Container2Card,
  ContainerCard,
  GraphicStyle,
  InfoStyle,
  QuantityStyle,
  ValueGraphic,
  VariationStyled
} from './style'
import { ReactNode } from 'react'
import graphic from '../../../assets/images/graphicDashboard2.png'

type TypeCard = {
  children: ReactNode
  graphPercentage: number
  quantity: number
  variation: number
}

export const Card = ({
  children,
  graphPercentage,
  quantity,
  variation
}: TypeCard) => {
  return (
    <ContainerCard>
      <GraphicStyle>
        <ValueGraphic>{`${graphPercentage}%`}</ValueGraphic>
      </GraphicStyle>
      <div>
        <InfoStyle>{children}</InfoStyle>
        <Container2Card>
          <QuantityStyle>{quantity}</QuantityStyle>
          <VariationStyled backgroundVariation={variation > 0}>
            {variation > 0 ? `+${variation}%` : `${variation}%`}
          </VariationStyled>
        </Container2Card>
      </div>
    </ContainerCard>
  )
}

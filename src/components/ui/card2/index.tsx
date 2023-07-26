import {
  ContainerCard,
  InfoStyle,
  QuantityStyle,
  VariationStyled
} from './style'

type TypeCard2 = {
  info: string
  quantity: number
  variation: number
  backgroundCard2: string
  colorInfoCard2: string
  colorQuantityCard2: string
}

export const Card2 = ({
  quantity,
  variation,
  backgroundCard2,
  info,
  colorInfoCard2,
  colorQuantityCard2
}: TypeCard2) => {
  return (
    <ContainerCard backgroundCard={backgroundCard2}>
      <InfoStyle colorInfo={colorInfoCard2}>{info}</InfoStyle>
      <div>
        <QuantityStyle colorQuantity={colorQuantityCard2}>
          {quantity}
        </QuantityStyle>
        <VariationStyled backgroundVariation={variation > 0}>
          {variation > 0 ? `+${variation}%` : `${variation}%`}
        </VariationStyled>
      </div>
    </ContainerCard>
  )
}

import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ContainerCard = styled.div<{ backgroundCard: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 20rem; /* Flex: grow shrink basis */
  max-width: 29.6rem;
  padding-right: 2.4rem;
  padding-left: 2.4rem;
  height: 12.4rem;
  border-radius: 2.4rem;
  box-shadow: 0rem 0rem 1rem rgba(1, 1, 1, 0.5);
  background-color: ${({ backgroundCard }) => backgroundCard}; //#02156a;

  & > div {
    display: flex;
    align-items: center;
    /* gap: 1.6rem; */
  }
`
export const InfoStyle = styled.h2<{ colorInfo: string }>`
  color: ${({ colorInfo }) => colorInfo}; //${colors.azul4};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
`
export const QuantityStyle = styled.div<{ colorQuantity: string }>`
  font-size: 3.2rem;
  line-height: 4.8rem;
  font-weight: 600;
  font-family: 'Sora', sans-serif;
  color: ${({ colorQuantity }) => colorQuantity};
  margin-right: 1.6rem;
`

export const VariationStyled = styled.div<{ backgroundVariation: boolean }>`
  background-color: ${({ backgroundVariation }) =>
    backgroundVariation ? colors.success : colors.error};
  padding: 0.2rem 1.3rem 0.2rem 1.3rem;
  border-radius: 10rem;
  font-size: 1.4rem;
  color: ${colors.white};
`

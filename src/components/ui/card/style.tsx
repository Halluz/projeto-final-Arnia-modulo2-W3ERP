import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'
import graphicImage from '../../../assets/images/graphicDashboard2.png'

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2.4rem;
  gap: 2.4rem;
  flex: 1 0 20rem; /* Flex: grow shrink basis */
  max-width: 34.6rem;
  height: 12.4rem;
  border-radius: 2.4rem;
  background-color: rgb(2, 21, 106);
`
export const InfoStyle = styled.h2`
  color: ${colors.azul4};
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 400;
`
export const QuantityStyle = styled.div`
  font-size: 3.2rem;
  line-height: 4.8rem;
  font-weight: 600;
  font-family: 'Sora', sans-serif;
  color: ${colors.white};
`

export const VariationStyled = styled.div<{ backgroundVariation: boolean }>`
  background-color: ${({ backgroundVariation }) =>
    backgroundVariation ? colors.success : colors.error};
  padding: 0.2rem 1.3rem 0.2rem 1.3rem;
  border-radius: 10rem;

  font-size: 1.4rem;
  color: ${colors.white};
`
export const Container2Card = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`

export const GraphicStyle = styled.div`
  width: 6rem;
  height: 6rem;
  border: 1px solid red;
  background-image: url(${graphicImage});
  background-size: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ValueGraphic = styled.div`
  font-size: 1.4rem;
  color: ${colors.white};
`

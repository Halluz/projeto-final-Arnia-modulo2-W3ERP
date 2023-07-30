import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'
import backgoundPanelClientPrediction from '../../../assets/images/icons/fundoPanelClientPrediction.svg'

export const ContainerPanelPredictionClient = styled.div`
  //height: 15.2rem;
  border-radius: 2.4rem;
  color: ${colors.white};
  background-color: ${colors.primaryBlue};
  background-image: url(${backgoundPanelClientPrediction});
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.9rem 3.2rem 3.9rem 3.2rem;
`
export const TitlePanelPrediction = styled.h1`
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 3.2rem;
`
export const ContainerPanelPredictionClient2 = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
`

export const ContainerPanelPredictionClient3 = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`

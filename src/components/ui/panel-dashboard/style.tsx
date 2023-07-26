import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ContainerPanelDashboard = styled.div`
  width: 100%;
  max-width: 158.2rem;
  //height: 29.2rem;
  border-radius: 2.4rem;
  background-color: ${colors.primaryBlue};
  padding: 4rem;
`

export const TitlePanel = styled.h1`
  margin-bottom: 4rem;
  font-family: 'Sora', sans-serif;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 4.8rem;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const ContainerCards = styled.div`
  display: flex;
  gap: 3.9rem;
  flex-wrap: wrap;
`

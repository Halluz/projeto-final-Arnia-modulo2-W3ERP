import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ContainerPanel = styled.div`
  width: 100%; //width: 160.6rem;
  /* height: 20.6rem; */
  border-radius: 2.4rem;
`

export const TitlePanel = styled.h1`
  margin-bottom: 3.2rem;
  font-family: 'Sora', sans-serif;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 5.04rem;
  color: ${colors.primaryBlue};
`
export const ContainerCards = styled.div`
  display: flex;
  gap: 2.6rem;
  flex-wrap: wrap;
`

import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const TitleStyle = styled.h2`
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: 0.02rem;
  color: ${colors.grey900};
`

export const ImageTableTitle = styled.img``

export const BackgroundImage = styled.div<{ backgroundStyle: string }>`
  background-color: ${({ backgroundStyle }) => backgroundStyle};
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
`
export const ContainerTableTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

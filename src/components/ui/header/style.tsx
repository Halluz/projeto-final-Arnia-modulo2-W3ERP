import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const HeaderSystem = styled.header<{ compressSidebar: boolean }>`
  z-index: 2;
  background-color: white;
  position: fixed;
  top: 0rem;
  left: ${({ compressSidebar }) =>
    compressSidebar ? '11.6rem' : '27.1rem'}; //27.1rem;
  height: 13rem; //130px;
  display: flex;
  justify-content: flex-end;
  //A função calc() permite realizar calculos matemáticos dentro das propriedades CSS.
  width: ${({ compressSidebar }) =>
    compressSidebar
      ? 'calc( 100% - 11.6rem)'
      : 'calc( 100% - 27.1rem )'}; //Com esta função cal() o elemento tera sua largura recalculada sempre que a largura do elemento pai for alterada. Este elemento terá a largura disponível no elemento pai.
  padding-right: 4.8rem;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`
export const ProfileName = styled.h3`
  font-family: 'Sora', sans-serif;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.8rem;
  color: ${colors.grey900};
`
export const ProfileEmail = styled.h4`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${colors.grey600};
  font-weight: 400;
`

export const ProfileLogo = styled.img`
  height: 5.6rem;
  width: 5.6rem;
`

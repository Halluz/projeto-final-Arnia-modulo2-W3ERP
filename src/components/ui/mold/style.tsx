import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const Container = styled.div`
  display: flex;
  border: 2px solid red;
  /* width: 100%; */
`

export const RightSide = styled.div`
  width: 100%;
  border: 7px solid orange;
`
export const MenusBackgroundSpace = styled.div<{ compressSidebar: boolean }>`
  padding: 13rem 0rem 0rem
    ${({ compressSidebar }) => (compressSidebar ? '11.6rem' : '27.1rem')};
  background-color: ${colors.grey50};
`

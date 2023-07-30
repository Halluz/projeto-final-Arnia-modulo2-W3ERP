import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const Tab1TR = styled.tr<{ lineHeight: string | undefined }>`
  height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}` : '5.6rem'}; // 5.6rem;
  border-top: 0.8rem solid ${colors.white};
  border-bottom: 0.8rem solid ${colors.white};
  background-color: ${colors.grey100};
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
  /* &:nth-child(2n) {
    background-color: $colors.grey400};
  } */
`

export const Tab1TH = styled.th``

export const Tab1TD = styled.td`
  color: ${colors.grey900};
`

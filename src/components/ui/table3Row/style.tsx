import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const Tab3TR = styled.tr<{ lineHeight: string | undefined }>`
  height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}` : '5.6rem'}; // 5.6rem;
  border-top: 0.8rem solid ${colors.white};
  border-bottom: 0.8rem solid ${colors.white};
  background-color: ${colors.grey100};
  /* &:nth-child(2n) {
    background-color: $colors.grey400};
  } */
`

export const Tab3TD = styled.td`
  color: ${colors.grey900};
`

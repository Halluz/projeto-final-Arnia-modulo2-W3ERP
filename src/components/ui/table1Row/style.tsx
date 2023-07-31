import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'
import { Link } from 'react-router-dom'

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

export const LinkRow = styled(Link)`
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  color: ${colors.grey900};
`

export const Tab1TD = styled.td`
  color: ${colors.grey900};
`

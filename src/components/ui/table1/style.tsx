import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const Tab1Style = styled.table`
  width: 100%; //70.7rem
  //border-collapse: collapse;
  border-collapse: separate;
  //border: 2px solid red;
  border-spacing: 0;
  border-radius: 1.6rem 1.6rem 0rem 0rem;
  //border-radius: 3rem;
`

export const Tab1Head = styled.thead`
  background-color: ${colors.primaryBlue};
  //border-radius: 1.6rem 1.6rem 0rem 0rem;
  //border: 5px solid green;
  border-bottom-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
  height: 5.6rem;
  color: ${colors.azul4};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
`

export const Tab1Body = styled.tbody`
  text-align: center;
  & > tr:nth-child(2n) {
    background-color: ${colors.grey300};
  }
`

// export const Tab1TR = styled.tr`
//   height: 5.6rem;
//   border-top: 0.8rem solid ${colors.white};
//   border-bottom: 0.8rem solid ${colors.white};
//   background-color: ${colors.grey100};
//   /* &:nth-child(2n) {
//     background-color: $colors.grey400};
//   } */
// `

export const Tab1TH = styled.th``

// export const Tab1TD = styled.td`
//   color: ${colors.grey900};
// `
export const Tab1Col2 = styled.col`
  text-align: left;
`

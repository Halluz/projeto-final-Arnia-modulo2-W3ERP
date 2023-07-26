import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const Tab2Style = styled.table`
  width: 100%; //70.7rem
  border-collapse: collapse;
  //border: 2px solid red;
  //border-radius: 1.6rem, 1.6rem, 0rem, 0rem;
  border-radius: 30px;
`

export const Tab2Head = styled.thead`
  background-color: ${colors.primaryBlue};
  /* border-radius: 1.6rem 1.6rem 0rem 0rem; */
  height: 5.6rem;
  color: ${colors.azul4};
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
`

export const Tab2Body = styled.tbody`
  text-align: center;
  & > tr:nth-child(2n) {
    background-color: ${colors.grey300};
  }
`

// export const Tab2TR = styled.tr`
//   height: 5.6rem;
//   border-top: 0.8rem solid ${colors.white};
//   border-bottom: 0.8rem solid ${colors.white};
//   background-color: ${colors.grey100};
//   /* &:nth-child(2n) {
//     background-color: $colors.grey400};
//   } */
// `

export const Tab2TH = styled.th``

// export const Tab2TD = styled.td`
//   color: ${colors.grey900};
// `
export const Tab2Col2 = styled.col`
  text-align: left;
`

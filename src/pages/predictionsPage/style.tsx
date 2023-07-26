import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ContainerPage = styled.main`
  width: 100%;
  padding: 3.2rem 3.2rem 5rem 3.2rem;
`

export const DivHeader = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
  box-shadow: 0rem 0rem 2.5rem 0rem #a3a3a3;
  border-radius: 2.4rem;
  padding: 2rem 2.4rem;
`

/* export const ContainerTables = styled.div`
  width: 100%;
  margin: 4rem 0rem;
  display: flex;
  gap: 4rem;

  @media (max-width: 56.3rem) {
    flex-wrap: wrap;
  }
` */

// export const ContainerTable = styled.div`
//   background-color: ${colors.white};
//   width: 100%;
//   /* padding: 2.4rem; */
//   border-radius: 3rem;
//   box-shadow: 0rem 0rem 2rem rgb(1, 1, 1, 0.5);
//   overflow-x: auto; /* Rolagem lateral da tabela somente se necessário (responsividade)*/

//   & > div {
//     width: 100%;
//     margin-bottom: 3.2rem;
//     display: flex;
//     justify-content: space-between;
//   }
// `
export const ContainerCardsPrediction = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 2.4rem;
  column-gap: 3.2rem;
  flex: 1 0 200px; /* Flex: grow shrink basis */
`

export const TitlePage = styled.h1`
  font-family: Sora;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 4.8rem;
  text-align: left;
  color: ${colors.grey900};
  margin-bottom: 3.2rem;
`

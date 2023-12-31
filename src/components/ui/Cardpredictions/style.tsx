import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'
import { Link } from 'react-router-dom'

export const ContainerCardPrediction = styled.div`
  width: 34.7rem;
  //height: 26.6rem;
  padding: 2.4rem;
  overflow: auto;
  box-shadow: 0rem 0rem 2.5rem 0rem rgba(163, 163, 163, 0.4);
  font-size: 1.4rem;
  font-weight: 400;
  color: ${colors.grey800};
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  border-radius: 2.2rem;
  background-color: ${colors.white};
`

export const HeaderCardPrediction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProfileCardPrediction = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`
export const ContainerClientNameAndStatus = styled.div`
  & > h2 {
    color: ${colors.grey900};
    font-weight: 600;
  }

  & > ul {
    list-style: none;
  }
`
export const Item = styled.li<{
  status: 'EM_ALTA' | 'EM ALTA' | 'EM_BAIXA' | 'EM BAIXA' | 'NEUTRO'
}>`
  color: ${({ status }) =>
    status === 'EM_ALTA' || status === 'EM ALTA'
      ? `${colors.success}`
      : status === `EM_BAIXA` || status === 'EM BAIXA'
      ? `${colors.error}`
      : `${colors.grey500}`};
  display: flex;
  gap: 0.7rem;
  align-items: center;
`

export const Circle = styled.div`
  background-color: ${colors.azul4};
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LinkCardPrediction = styled(Link)`
  text-decoration: none;
  &:hover {
    font-weight: 700;
    border: 0.2rem solid ${colors.azul4};
    border-radius: 1rem;
  }
`

export const MarkerStyle = styled.img<{
  status: 'EM_ALTA' | 'EM ALTA' | 'EM_BAIXA' | 'EM BAIXA' | 'NEUTRO'
}>`
  filter: ${({ status }) =>
    status === 'EM_ALTA' || status === 'EM ALTA'
      ? `${colors.success}`
      : status === 'EM_BAIXA' || status === 'EM BAIXA'
      ? `${colors.error}`
      : `${colors.grey500}`}; //hue-rotate(180);
`

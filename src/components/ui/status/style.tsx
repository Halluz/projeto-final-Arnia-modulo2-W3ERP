import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const EmAlta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: ${colors.lightGreen};
  width: 11.1rem;
  height: 4rem;
  border-radius: 0.8rem;
  color: ${colors.success};

  &:hover {
    border: 0.1rem solid ${colors.success};
  }
`
export const EmBaixa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.lightRed};
  margin: 0 auto;
  width: 11.1rem;
  height: 4rem;
  border-radius: 0.8rem;
  color: ${colors.error};

  &:hover {
    border: 0.1rem solid ${colors.error};
  }
`

export const Neutro = styled.div`
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.1rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: 0.2rem solid ${colors.grey400};
  color: ${colors.grey500};
  font-weight: 500;
  margin: 0 auto;

  &:hover {
    border: 0.2rem solid ${colors.grey600};
    color: ${colors.grey700};
  }
`

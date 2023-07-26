import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ContentHelp = styled.div`
  background-color: ${colors.azul2}; //#796ce0;
  width: 22.3rem;
  height: 20.1rem;
  border-radius: 2.5rem;
  position: relative;
  color: ${colors.white};
  padding: 1.6rem;
  margin-top: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Pp = styled.p`
  margin-top: 4.6rem;
  margin-bottom: 1.6rem;
  width: 17.7rem;
`

export const HelpHandsImage = styled.img`
  position: absolute;
  top: 0rem;
  transform: translate(0%, -50%);
`

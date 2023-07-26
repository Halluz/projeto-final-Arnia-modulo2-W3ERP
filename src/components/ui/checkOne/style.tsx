import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const ContainerExternal = styled.div`
  //width: 4rem;
  //height: 4rem;
  display: inline-block;
  position: relative;
`

export const ContainerCheckOne = styled.div<{ clicked: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ clicked }) =>
    clicked ? colors.lightGreen : colors.white}; //$colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2rem solid ${colors.grey500};

  &:hover {
    cursor: pointer;
  }

  &.active {
    background-color: ${colors.lightGreen};
  }
`

export const ImageBallon = styled.img<{ showAndHide: boolean }>`
  display: ${({ showAndHide }) => (showAndHide ? 'block' : 'none')};
  top: 0rem;
  //right: 0px;
  position: absolute;
  transform: translate(-40%, -90%);
`

import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const InputStyle = styled.input<{ hasValue: boolean }>`
  width: 100%;
  /* height: 67px; */
  height: 6.7rem; //67px
  padding-left: 1.6rem; // 16px

  &:focus {
    border: 1px solid ${colors.success};
    outline: none; // Remove a borda de foco padrão
  }
  /* border-radius: 16px; */
  border-radius: 1.6rem; //16px
  border: 1px solid
    ${({ hasValue }) => (hasValue ? `${colors.success}` : `${colors.grey300}`)};

  &::placeholder {
    color: ${colors.grey400};
  }
`
export const ContainerInput = styled.div`
  position: relative;
`
export const LabelStyle = styled.label<{ hasValue: boolean }>`
  position: absolute;
  left: 1.2rem; //12px;
  transform: translate(0%, -50%); //top: -13px;
  background-color: white;
  padding: 0px 5px;
  font-size: 14px;
  color: ${({ hasValue }) => (hasValue ? colors.success : colors.grey600)};
`
export const Eye = styled.img`
  position: absolute;
  right: 1.6rem;
  top: 2rem;
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`

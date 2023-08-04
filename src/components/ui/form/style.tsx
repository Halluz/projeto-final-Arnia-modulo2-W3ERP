import styled from 'styled-components'
import { colors } from '@/assets/styles/colors'

export const FormStyle = styled.form`
  width: 40rem; //400px;
  padding: 4rem 2rem;
`
export const TitleH3 = styled.h3`
  font-family: 'Sora', sans-serif;
  font-size: 2rem; //20px;
  font-weight: 400;
  line-height: 2.8rem; //28px;
  /* letter-spacing: 0.20000000298023224px; */
  text-align: left;
  color: ${colors.grey800};
`

export const TitleH2 = styled.h2`
  //styleName: H3 36px;
  font-family: 'Sora', sans-serif;
  font-size: 3.6rem; //36px;
  font-weight: 700;
  line-height: 5rem; //50px;
  /* letter-spacing: 0em; */
  text-align: left;
  margin-bottom: 4rem; //40px;
  color: ${colors.grey900};
`

export const ContainerSpace24px = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem; //24px
`

export const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.3rem;
  margin-bottom: 4rem;
`
export const Container3 = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Label2 = styled.label`
  font-size: 1.6rem; //16px
  font-weight: 600;
  line-height: 2.4rem; //24px
  /* letter-spacing: 0.20000000298023224px; */
  text-align: left;
  color: ${colors.grey900};
`
export const CheckBox = styled.input`
  width: 2rem;
  height: 2rem;
`

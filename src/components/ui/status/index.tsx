import { EmAlta, EmBaixa, Neutro } from './style'

export type TypeStatus = {
  status: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
}

export const Status = ({ status }: TypeStatus) => {
  if (status === 'EM_ALTA') {
    return <EmAlta>Em alta</EmAlta>
  } else if (status === 'EM_BAIXA') {
    return <EmBaixa>Em baixa</EmBaixa>
  } else {
    return <Neutro>Neutro</Neutro>
  }
}

import { EmAlta, EmBaixa, Neutro } from './style'

export type TypeStatus = {
  classificacao: 'EM_ALTA' | 'EM_BAIXA' | 'NEUTRO'
}

export const Status = ({ classificacao }: TypeStatus) => {
  if (classificacao === 'EM_ALTA') {
    return <EmAlta>Em alta</EmAlta>
  } else if (classificacao === 'EM_BAIXA') {
    return <EmBaixa>Em baixa</EmBaixa>
  } else {
    return <Neutro>Neutro</Neutro>
  }
}

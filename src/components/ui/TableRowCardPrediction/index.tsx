import { TDStyle, TDStyle2 } from './style'

export type TypeTableRowCardPredition = {
  cell1: string
  cell2: string
}

export const TableRowCardPrediction = ({
  cell1,
  cell2
}: TypeTableRowCardPredition) => {
  return (
    <tr>
      <TDStyle2>{cell1}</TDStyle2>
      <TDStyle>{cell2}</TDStyle>
    </tr>
  )
}

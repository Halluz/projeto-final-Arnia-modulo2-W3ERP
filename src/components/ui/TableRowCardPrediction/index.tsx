import { TDStyle } from './style'

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
      <td>{cell1}</td>
      <TDStyle>{cell2}</TDStyle>
    </tr>
  )
}

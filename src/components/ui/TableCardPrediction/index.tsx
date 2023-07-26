import { Children, ReactNode } from 'react'
import { TableCardPredictionStyle, TableHeaderCardPrediction } from './style'

export type TypeTableCardPrediction = {
  col1Name: string
  col2Name: string
  children: ReactNode
}

export const TableCardPrediction = ({
  col1Name,
  col2Name,
  children
}: TypeTableCardPrediction) => {
  return (
    <TableCardPredictionStyle>
      <TableHeaderCardPrediction>
        <th style={{ textAlign: 'left' }}>{col1Name}</th>
        <th>{col2Name}</th>
      </TableHeaderCardPrediction>
      <tbody>{children}</tbody>
    </TableCardPredictionStyle>
  )
}

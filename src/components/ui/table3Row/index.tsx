import { ReactNode } from 'react'
import { Tab3TR, Tab3TD } from './style'

type TypeTab3Row = {
  cell1: string
  cell2: string
  cell3: ReactNode
  cell4: ReactNode
  cell5: ReactNode
  cell6: ReactNode
  lineHeight?: string
}

export const Table3Row = ({
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
  lineHeight
}: TypeTab3Row) => {
  return (
    <Tab3TR lineHeight={lineHeight}>
      <Tab3TD>{cell1}</Tab3TD>
      <Tab3TD>{cell2}</Tab3TD>
      <Tab3TD>{cell3}</Tab3TD>
      <Tab3TD>{cell4}</Tab3TD>
      <Tab3TD>{cell5}</Tab3TD>
      <Tab3TD>{cell6}</Tab3TD>
    </Tab3TR>
  )
}

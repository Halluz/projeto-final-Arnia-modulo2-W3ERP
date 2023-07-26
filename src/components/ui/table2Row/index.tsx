import { ReactNode } from 'react'
import { Tab2TR, Tab2TD } from './style'

type TypeTab2Row = {
  cell1: string
  cell2: string
  cell3: ReactNode
  cell4: ReactNode
  cell5: ReactNode
  lineHeight?: string
}

export const Table2Row = ({
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  lineHeight
}: TypeTab2Row) => {
  return (
    <Tab2TR lineHeight={lineHeight}>
      <Tab2TD>{cell1}</Tab2TD>
      <Tab2TD>{cell2}</Tab2TD>
      <Tab2TD>{cell3}</Tab2TD>
      <Tab2TD>{cell4}</Tab2TD>
      <Tab2TD>{cell5}</Tab2TD>
    </Tab2TR>
  )
}

import { ReactNode } from 'react'
import { Tab1TR, Tab1TD } from './style'
import { Link } from 'react-router-dom'

type TypeTab1Row = {
  cell1: number
  cell2: string
  cell3: ReactNode
  cell4: ReactNode
  lineHeight?: string
}

export const Table1Row = ({
  cell1,
  cell2,
  cell3,
  cell4,
  lineHeight
}: TypeTab1Row) => {
  return (
    <Tab1TR lineHeight={lineHeight}>
      <Tab1TD>{cell1}</Tab1TD>
      <Tab1TD>{cell2}</Tab1TD>
      <Tab1TD>{cell3}</Tab1TD>
      <Tab1TD>{cell4}</Tab1TD>
    </Tab1TR>
  )
}

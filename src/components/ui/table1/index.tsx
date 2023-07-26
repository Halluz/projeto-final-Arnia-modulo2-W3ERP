import {
  Tab1Style,
  Tab1Body,
  Tab1Head,
  // Tab1TR,
  Tab1TH,
  // Tab1TD,
  Tab1Col2
} from './style'
import rightArrow from '../../../assets/images/icons/rightArrowTable.svg'
import { Children, ReactNode } from 'react'

type TypeTable = {
  col1: string
  col2: string
  col3: string
  col4: string
  children: ReactNode
}

export const Table1 = ({ col1, col2, col3, col4, children }: TypeTable) => {
  return (
    <Tab1Style>
      <colgroup>
        <col />
        <Tab1Col2 />
        <col />
        <col />
      </colgroup>
      <Tab1Head>
        <tr>
          <Tab1TH scope="col">{col1}</Tab1TH>
          <Tab1TH scope="col">{col2}</Tab1TH>
          <Tab1TH scope="col">{col3}</Tab1TH>
          <Tab1TH scope="col">{col4}</Tab1TH>
        </tr>
      </Tab1Head>
      <Tab1Body>{children}</Tab1Body>
    </Tab1Style>
  )
}

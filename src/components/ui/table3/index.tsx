import {
  Tab3Style,
  Tab3Body,
  Tab3Head,
  // Tab3TR,
  Tab3TH,
  // Tab3TD,
  Tab3Col2
} from './style'
import rightArrow from '../../../assets/images/icons/rightArrowTable.svg'
import { Children, ReactNode } from 'react'

type TypeTable3 = {
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
  col6: string
  children: ReactNode
}

export const Table3 = ({
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  children
}: TypeTable3) => {
  return (
    <Tab3Style>
      <colgroup>
        <col />
        <Tab3Col2 />
        <col />
        <col />
        <col />
      </colgroup>
      <Tab3Head>
        <tr>
          <Tab3TH scope="col">{col1}</Tab3TH>
          <Tab3TH scope="col">{col2}</Tab3TH>
          <Tab3TH scope="col">{col3}</Tab3TH>
          <Tab3TH scope="col">{col4}</Tab3TH>
          <Tab3TH scope="col">{col5}</Tab3TH>
          <Tab3TH scope="col">{col6}</Tab3TH>
        </tr>
      </Tab3Head>
      <Tab3Body>{children}</Tab3Body>
    </Tab3Style>
  )
}

import {
  Tab2Style,
  Tab2Body,
  Tab2Head,
  // Tab2TR,
  Tab2TH,
  // Tab2TD,
  Tab2Col2
} from './style'
import rightArrow from '../../../assets/images/icons/rightArrowTable.svg'
import { Children, ReactNode } from 'react'

type TypeTable2 = {
  col1: string
  col2: string
  col3: string
  col4: string
  col5: string
  children: ReactNode
}

export const Table2 = ({
  col1,
  col2,
  col3,
  col4,
  col5,
  children
}: TypeTable2) => {
  return (
    <Tab2Style>
      <colgroup>
        <col />
        <Tab2Col2 />
        <col />
        <col />
        <col />
      </colgroup>
      <Tab2Head>
        <tr>
          <Tab2TH scope="col">{col1}</Tab2TH>
          <Tab2TH scope="col">{col2}</Tab2TH>
          <Tab2TH scope="col">{col3}</Tab2TH>
          <Tab2TH scope="col">{col4}</Tab2TH>
          <Tab2TH scope="col">{col5}</Tab2TH>
        </tr>
      </Tab2Head>
      <Tab2Body>{children}</Tab2Body>
    </Tab2Style>
  )
}

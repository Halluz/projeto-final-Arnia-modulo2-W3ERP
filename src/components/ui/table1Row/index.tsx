import { ReactNode } from 'react'
import { Tab1TR, Tab1TD, LinkRow } from './style'
import { Link } from 'react-router-dom'

type TypeTab1Row = {
  cell1: number
  cell2: string
  cell3: ReactNode
  cell4: ReactNode
  lineHeight?: string
  typeLink: 'product' | 'client' | 'noLink'
}

export const Table1Row = ({
  cell1,
  cell2,
  cell3,
  cell4,
  lineHeight,
  typeLink
}: TypeTab1Row) => {
  if (typeLink === 'product') {
    return (
      <Tab1TR lineHeight={lineHeight}>
        <Tab1TD>
          <LinkRow to={`../../mold/ProductPage/${cell1}`}>{cell1}</LinkRow>
        </Tab1TD>
        <Tab1TD>
          <LinkRow to={`../../mold/ProductPage/${cell1}`}>{cell2}</LinkRow>
        </Tab1TD>
        <Tab1TD>
          <LinkRow to={`../../mold/ProductPage/${cell1}`}>{cell3}</LinkRow>
        </Tab1TD>
        <Tab1TD>
          <LinkRow to={`../../mold/ProductPage/${cell1}`}>{cell4}</LinkRow>
        </Tab1TD>
      </Tab1TR>
    )
  } else if (typeLink === 'client') {
    return (
      <Tab1TR lineHeight={lineHeight}>
        <Tab1TD>
          <LinkRow to={`../../mold/clientPage/${cell1}`}>{cell1}</LinkRow>
        </Tab1TD>
        <Tab1TD>
          <LinkRow to={`../../mold/clientPage/${cell1}`}>{cell2}</LinkRow>
        </Tab1TD>
        <Tab1TD>
          <LinkRow to={`../../mold/clientPage/${cell1}`}>{cell3}</LinkRow>
        </Tab1TD>
        <Tab1TD>
          <LinkRow to={`../../mold/clientPage/${cell1}`}>{cell4}</LinkRow>
        </Tab1TD>
        {/* <Tab1TD>{cell1}</Tab1TD>
        <Tab1TD>{cell2}</Tab1TD>
        <Tab1TD>{cell3}</Tab1TD>
        <Tab1TD>{cell4}</Tab1TD> */}
      </Tab1TR>
    )
  } else {
    return (
      <Tab1TR lineHeight={lineHeight}>
        <Tab1TD>{cell1}</Tab1TD>
        <Tab1TD>{cell2}</Tab1TD>
        <Tab1TD>{cell3}</Tab1TD>
        <Tab1TD>{cell4}</Tab1TD>
      </Tab1TR>
    )
  }
}

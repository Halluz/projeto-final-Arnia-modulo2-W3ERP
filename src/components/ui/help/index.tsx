import Button2 from '../button-copy'
import handsImage from '../../../assets/images/icons/helpingHands.svg'
import { ContentHelp, Pp, HelpHandsImage } from './style'
import { ReactNode } from 'react'

type TypeHelp = {
  buttonContent: string
  children: ReactNode
}

export const Help = ({ children, buttonContent }: TypeHelp) => {
  return (
    <ContentHelp>
      <HelpHandsImage src={handsImage} alt="Image" />
      <Pp>{children}</Pp>
      <Button2 heightProp="4.8rem">{buttonContent}</Button2>
    </ContentHelp>
  )
}

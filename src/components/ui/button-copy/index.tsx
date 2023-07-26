import { ReactNode } from 'react'
import { ButtonBlue } from './style'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode
  heightProp: string
}

export default function Button2({ children, heightProp, ...props }: Props) {
  return <ButtonBlue heightProp={heightProp}>{children}</ButtonBlue>
}

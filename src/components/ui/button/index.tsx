import { ReactNode } from 'react'
import { ButtonBlue } from './style'

type Props = {
  children: ReactNode
  type?: 'button' | 'reset' | 'submit'
}

export default function Button({ children, type }: Props) {
  return <ButtonBlue type={type}>{children}</ButtonBlue>
}

import {
  HeaderSystem,
  Profile,
  ProfileName,
  ProfileEmail,
  ProfileLogo
} from './style'
import userLogo from '../../../assets/images/icons/userLogo.svg'
import Dropdown from '../dropdow'
import { useState, useEffect } from 'react'
import { getUserMe } from '@/config/services/functions'

type PropsHeader = {
  name: string
  email: string
  compresssidebar: boolean
}

/* type UserMe = {
  email: string
  id: number
  nome: string
  papel: string
} */

export const Header = ({ name, email, compresssidebar }: PropsHeader) => {
  /*   const [userMe, setUserMe] = useState<UserMe>({
    email: 'Anonimo@gmail.com',
    id: 0,
    nome: 'Anonimo',
    papel: 'ADMINISTRADOR'
  })

  useEffect(() => {
    const getUserMe2 = async () => {
      const response = await getUserMe()
      console.log(response)
      setUserMe(response.data)
    }
    getUserMe2()
  }, [])
 */
  return (
    <HeaderSystem compresssidebar={compresssidebar}>
      <Profile>
        <ProfileLogo src={userLogo} alt="Logotipo de Usuário" />
        <div>
          <ProfileName>{name}</ProfileName>
          <ProfileEmail>{email}</ProfileEmail>
        </div>
        <Dropdown />
      </Profile>
    </HeaderSystem>
  )
}

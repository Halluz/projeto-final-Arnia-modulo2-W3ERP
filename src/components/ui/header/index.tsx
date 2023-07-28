import {
  HeaderSystem,
  Profile,
  ProfileName,
  ProfileEmail,
  ProfileLogo
} from './style'
import userLogo from '../../../assets/images/icons/userLogo.svg'
import Dropdown from '../dropdow'

type PropsHeader = {
  name: string
  email: string
  compresssidebar: boolean
}

export const Header = ({ name, email, compresssidebar }: PropsHeader) => {
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

import { Header } from '../header'
import { Container, RightSide, MenusBackgroundSpace } from './style'
import { Sidebar } from '../sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { autorization, getUserMe, UserMe } from '@/config/services/functions'

export const Mold = () => {
  const [compresssidebar, setcompresssidebar] = useState(false)
  const [userMe, setUserMe] = useState<UserMe>({
    email: 'Anonimo@gmail.com',
    id: 0,
    nome: 'Anonimo',
    papel: 'ADMINISTRADOR'
  })

  const navigate = useNavigate()

  useEffect(() => {
    const authorized = autorization()
    if (authorized) {
      const getUserMe2 = async () => {
        const response = await getUserMe()
        console.log(response)
        setUserMe(response)
      }
      getUserMe2()
    } else {
      navigate('/naoautorizado')
    }
  }, [])

  return (
    <Container>
      <Sidebar
        compresssidebar={compresssidebar}
        setcompresssidebar={setcompresssidebar}
      />
      <RightSide>
        <Header
          compresssidebar={compresssidebar}
          name={userMe.nome}
          email={userMe.email}
        />
        {/* conteúdo */}
        <MenusBackgroundSpace compresssidebar={compresssidebar}>
          <Outlet />
        </MenusBackgroundSpace>
      </RightSide>
    </Container>
  )
}

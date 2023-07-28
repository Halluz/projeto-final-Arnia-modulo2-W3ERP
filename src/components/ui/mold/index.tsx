import { Header } from '../header'
import { Container, RightSide, MenusBackgroundSpace } from './style'
import { Sidebar } from '../sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export const Mold = () => {
  const [compresssidebar, setcompresssidebar] = useState(false)

  return (
    <Container>
      <Sidebar
        compresssidebar={compresssidebar}
        setcompresssidebar={setcompresssidebar}
      />
      <RightSide>
        <Header
          compresssidebar={compresssidebar}
          name="Rafel Pimenta"
          email="rafael@gmail.com"
        />
        {/* conteúdo */}
        <MenusBackgroundSpace compresssidebar={compresssidebar}>
          <Outlet />
        </MenusBackgroundSpace>
      </RightSide>
    </Container>
  )
}

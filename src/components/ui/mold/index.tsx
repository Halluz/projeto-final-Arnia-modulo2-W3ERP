import { Header } from '../header'
import { Container, RightSide, MenusBackgroundSpace } from './style'
import { Sidebar } from '../sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

export const Mold = () => {
  const [compressSidebar, setCompressSidebar] = useState(false)

  return (
    <Container>
      <Sidebar
        compressSidebar={compressSidebar}
        setCompressSidebar={setCompressSidebar}
      />
      <RightSide>
        <Header
          compressSidebar={compressSidebar}
          name="Rafel Pimenta"
          email="rafael@gmail.com"
        />
        {/* conteúdo */}
        <MenusBackgroundSpace compressSidebar={compressSidebar}>
          <Outlet />
        </MenusBackgroundSpace>
      </RightSide>
    </Container>
  )
}

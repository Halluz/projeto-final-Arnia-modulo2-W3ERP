import { ContainerSidebarNav, ListMenu, LogoW3ERP } from './style'
import { ItemSidebar } from '../item-sidebar'
import dashboardLogo from '../../../assets/images/icons/dashboardLogo.svg'
import predicoesLogo from '../../../assets/images/icons/predicoesLogo.svg'
import productsLogo from '../../../assets/images/icons/productsLogo.svg'
import logoW3ERP from '../../../assets/images/icons/W3ERP-logo.svg'
import smallLogoW3 from '../../../assets/images/icons/smallLogoW3.svg'
import { Help } from '../help'

const vetItemList = [
  {
    title: 'DashBoard',
    icon: dashboardLogo,
    to: '/mold/dashboardPage'
  },
  {
    title: 'Predições',
    icon: predicoesLogo,
    to: '/mold/predicoesPage'
  },
  {
    title: 'Produtos',
    icon: productsLogo,
    to: '/mold/productsPage'
  }
]

type TypeSidebar = {
  compressSidebar: boolean
  setCompressSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar = ({
  compressSidebar,
  setCompressSidebar
}: TypeSidebar) => {
  if (compressSidebar === false) {
    return (
      <ContainerSidebarNav compressSidebar={compressSidebar}>
        <LogoW3ERP
          title="Comprimir menu lateral"
          onClick={() => setCompressSidebar(!compressSidebar)}
          src={logoW3ERP}
          alt="Logo W3ERP"
        />
        <ListMenu>
          {vetItemList.map((element, index) => (
            <ItemSidebar
              compressSidebar={compressSidebar}
              key={`${index}${element.title}`}
              title={element.title}
              image={element.icon}
              to={element.to}
            />
          ))}
        </ListMenu>
        <Help buttonContent="Fale Conosco">
          Precisando de{' '}
          <strong style={{ fontWeight: '600' }}>ajuda ou suporte</strong> em
          algo?
        </Help>
      </ContainerSidebarNav>
    )
  } else {
    return (
      <ContainerSidebarNav compressSidebar={compressSidebar}>
        <LogoW3ERP
          title="Expandir menu lateral"
          onClick={() => setCompressSidebar(!compressSidebar)}
          src={smallLogoW3}
          alt="Logo W3ERP"
        />
        <ListMenu>
          {vetItemList.map((element, index) => (
            <ItemSidebar
              compressSidebar={compressSidebar}
              key={`${index}${element.title}`}
              title={''}
              image={element.icon}
              to={element.to}
            />
          ))}
        </ListMenu>
      </ContainerSidebarNav>
    )
  }
}

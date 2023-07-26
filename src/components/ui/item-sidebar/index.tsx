import { NavLinks } from './style'

type typeItemSidebar = {
  title: string
  image: string
  to: string
  compressSidebar: boolean
}

export const ItemSidebar = ({
  title,
  image,
  to,
  compressSidebar
}: typeItemSidebar) => {
  return (
    <li>
      <NavLinks compressSidebar={compressSidebar} to={to}>
        <img src={image} alt={`${title} Logo`} />
        {title}
      </NavLinks>
    </li>
  )
}

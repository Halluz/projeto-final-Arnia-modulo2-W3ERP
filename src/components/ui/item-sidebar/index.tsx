import { NavLinks } from './style'

type typeItemSidebar = {
  title: string
  image: string
  to: string
  compresssidebar: boolean
}

export const ItemSidebar = ({
  title,
  image,
  to,
  compresssidebar
}: typeItemSidebar) => {
  return (
    <li>
      <NavLinks compresssidebar={compresssidebar} to={to}>
        <img src={image} alt={`${title} Logo`} />
        {title}
      </NavLinks>
    </li>
  )
}

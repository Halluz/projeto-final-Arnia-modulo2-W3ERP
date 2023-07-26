import { TitleStyle, BackgroundImage, ContainerTableTitle } from './style'

type TypeTableTitle = {
  image: string
  title: string
  background: string
}

export const TableTitle = ({ image, title, background }: TypeTableTitle) => {
  return (
    <ContainerTableTitle>
      <BackgroundImage backgroundStyle={background}>
        <img src={image} alt="Imagem" />
      </BackgroundImage>
      <TitleStyle>{title}</TitleStyle>
    </ContainerTableTitle>
  )
}

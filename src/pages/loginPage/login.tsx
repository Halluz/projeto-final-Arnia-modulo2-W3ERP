import { FormLogin } from '@/components/ui/form'
import { Container1, Container2, ImageLogin } from './style'
import ExecutiveBoy from '../../assets/images/loginBoy2.jpg'

export const LoginPage = () => {
  return (
    <Container1>
      <Container2>
        <FormLogin />
      </Container2>
      <Container2>
        <ImageLogin src={ExecutiveBoy} alt="Executive Boy" />
      </Container2>
    </Container1>
  )
}

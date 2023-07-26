import { FormLogin } from '@/components/ui/form'
import { Container1, Container2 } from './style'
import ExecutiveBoy from '../../assets/images/loginBoy2.jpg'

export const LoginPage = () => {
  return (
    <Container1>
      <Container2>
        <FormLogin />
      </Container2>
      <div>
        <img src={ExecutiveBoy} alt="Executive Boy" />
      </div>
    </Container1>
  )
}

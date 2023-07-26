import calendarIcon from '../../../assets/images/icons/calendarIcon.svg'
import downArrowCalendarButton from '../../../assets/images/icons/downArrowCalendarButton.svg'
import { BtnCalendarStyle, SpanCalendarButton } from './style'

export const CalendarButton = () => {
  return (
    <BtnCalendarStyle>
      <img src={calendarIcon} alt="Ícone Calendário" />{' '}
      <p>
        Mostrar: <SpanCalendarButton>Esse mês</SpanCalendarButton>
      </p>{' '}
      <img src={downArrowCalendarButton} alt="Seta para baixo" />
    </BtnCalendarStyle>
  )
}

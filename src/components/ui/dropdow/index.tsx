import { useState, useEffect, useRef } from 'react'
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem
} from './style'
import settingsLogo from '../../../assets/images/icons/setting-Image.svg'
import logout from '../../../assets/images/icons/logoutImage.svg'
import { colors } from '@/assets/styles/colors'
import dropdownImage from '../../../assets/images/icons/downArrow.svg'

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleMenu}>
        <img src={dropdownImage} alt="Logo dropdown" />
      </DropdownButton>
      <DropdownMenu open={isOpen}>
        <DropdownMenuItem>
          <img src={settingsLogo} alt="Logo Engrenagem" /> Configurações
        </DropdownMenuItem>
        <hr style={{ border: `1px solid ${colors.grey100}` }} />
        <DropdownMenuItem>
          <img src={logout} alt="Logo Sair" /> Sair
        </DropdownMenuItem>
      </DropdownMenu>
    </DropdownContainer>
  )
}

export default Dropdown

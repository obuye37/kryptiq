import React from 'react'
import { usePathname } from 'next/navigation'
import LogoImg from '../assets/KIQlogo.png'
import { Navbar, NavLink, Logo, Box } from './Styled'
import { FaTwitter, FaTelegram } from 'react-icons/fa'
import Link from 'next/link'


function Navigation() {
  return (
        <Navbar bgColor='#eee'>
            <Box flex jc='left'>
              <Logo width={500} height={100} src={LogoImg} alt='kryptoiq logo with name' />
            </Box>
            <Box flex jc="flex-end" gap="20px">
              <NavLink color="#111" href='/'>Home</NavLink>
              <NavLink color='#111' href='/about'>About</NavLink>
              <NavLink color='#111' href='/blog'>Blog</NavLink>
              <NavLink color='#111' href='/contact'>Contact</NavLink>
              <NavLink color='#111' href='/litepaper'>Litepaper</NavLink>
            </Box>
            <Box flex gap='20px' w="20%" jc="center">
              <Link href={'/'}><FaTwitter /></Link>
              <Link href={'/'}><FaTelegram /></Link>
            </Box>
        </Navbar>
  )
}

export default Navigation

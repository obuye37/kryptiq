import React from 'react'
import { Main, NavLink, Text } from './components/Styled'

const NotFound = () => {
  return (
    <Main>
      <Text>Opps... The page you requested wasn't found </Text>
      <NavLink href='/'>Goto Home</NavLink>
    </Main>
  )
}

export default NotFound

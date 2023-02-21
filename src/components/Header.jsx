import React from 'react'
import { Container } from 'react-bootstrap'
import Image from "react-bootstrap/Image"
import imgLgo from '../assets/nba-logo.png'
const Header = () => {
  return (
    <Container>
        <Image src={imgLgo} width="250px"></Image>
        <h1 className='my-2 font-monospace display-4'>NBA Legends</h1>
    </Container>
  )
}

export default Header
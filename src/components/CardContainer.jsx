import React from 'react'
import { Container, Row } from 'react-bootstrap'
import {data} from "../helpers/data"
import PlayerCard from './PlayerCard'
const CardContainer = () => {
  return (
   <Container className='card-container rounded-4 my-4 p-3'>
    {data.map((player)=>(
        <PlayerCard player={player}/>

    ))}
    <Row>

    </Row>
   </Container>
  )
}

export default CardContainer
import React from 'react'
import { Card } from 'react-bootstrap';

const PlayerCard = (name,img,statistics) => {
   
    return (
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Footer>
          <Card.Title>Card Link</Card.Title>
        </Card.Footer>
      </Card>
    );
  };

export default PlayerCard
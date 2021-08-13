import React, {useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import Nav from '../components/Navbar'

function Dashboard() {
  
useEffect(() => {
  
}, [])

    return (<>

<Nav></Nav>
<Card style={{ width: '18rem', marginTop:'200px' }} className="container">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
        </Card>
        </>
    )
}

export default Dashboard

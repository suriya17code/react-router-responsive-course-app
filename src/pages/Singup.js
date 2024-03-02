import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './pages.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Singup() {
  return (
<>

 <div className='bg'>

 
<Container>
<h1 className='sign'>SIGN UP </h1>
<Row>
<Col xs={0} sm={0} md={6} lg={6}  className='o'> 
<div className='one'>

 
<div className='first'>
<img width="54" height="54" src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/external-discount-e-commerce-kmg-design-outline-color-kmg-design.png" alt="external-discount-e-commerce-kmg-design-outline-color-kmg-design"/>
<div className='left'>
<h3>50% discount</h3>
<p className='per'> first 10 pre-Book persons
  free special welcome drink</p>
  </div>
</div>
 
<div className='second'>
<img width="54" height="54" src="https://img.icons8.com/fluency/48/calendar--v1.png" alt="calendar--v1"/>
<div className='left'>
<h3>special event</h3>
<p className='per'> more benifits
  inculde declaration</p>
  </div>
</div>
 
<div className='third'>
<img width="54" height="54" src="https://img.icons8.com/fluency/48/deliver-food.png" alt="deliver-food"/>
<div className='left'>
<h3>30 days free trail</h3>
<p className='per'> access for all notes
  with example </p>
  </div>
</div>
</div>
</Col>

<Col xs={12} sm={12} md={6} lg={6} className='oo'>


<div className='two'>

<h1 className='h1text'>Singup as Pre-Book</h1> 

<Form>
  
<Row>
<Form.Label>First name</Form.Label>
<Col>

  <Form.Control placeholder="First name" />
</Col>
<Form.Label>Last name</Form.Label>
<Col>

  <Form.Control placeholder="Last name" />
</Col>
</Row>
</Form>

<Form>
<Form.Label>Email address</Form.Label>
      <Form.Group className="mb-3" controlId="formGroupEmail">
       
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Group className="mb-3" controlId="formGroupPassword">
       
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>

    <Form>
      <Row>
      <Form.Label>Address</Form.Label>
        <Col xs={4}>
        
          <Form.Control placeholder="City" />
        </Col>
        <Col>
        
          <Form.Control placeholder="State" />
        </Col>
        <Col>
     
          <Form.Control placeholder="pincode" />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="btn">
            Submit
          </Button>
          </Col>
      </Row>
    </Form>

</div>

</Col>
</Row>
</Container>

</div>       


      
        </>
  )
}

export default Singup;
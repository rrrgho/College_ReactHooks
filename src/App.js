import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// or less ideally
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel, Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  const [slide1, setSlide1] = useState('Title Default')
  const [slide2, setSlide2] = useState('Title Default')



  return (
    <div style={{width:'100%', flex:1, paddingLeft:'20%', alignItems:'center', justifyContent:'center'}}>
      <div style={{width:1000, height:500, backgroundPosition:'center', alignContent:'center', marginTop:100}}>
        <Carousel controls={true}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://play-lh.googleusercontent.com/proxy/2tj1HTTkxfLUCHMYCMY7Ik_u9Dv-ctrQ7tteluo8MkL9bUzSFutbEcvkGroJxU6PTS84IHjfzCYjRsCflXcZ5k_CV2OAD2Al4i_fUCrb6cBVNvtB4TZhu97Z=w720-h405-rw"
              alt="First slide"
              style={{height:500}}
            />
            <Carousel.Caption>
              <h3>{slide1}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn-2.tstatic.net/banjarmasin/foto/bank/images/minion-the-rise-of-gru-3.jpg"
              alt="Third slide"
              style={{height:500}}
            />

            <Carousel.Caption>
              <h3>{slide2}</h3>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <Container style={{marginTop:30}}>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Slide 1</Form.Label>
              <Form.Control type="email" placeholder="Slide 1 Title" onChange={e => {setSlide1(e.target.value)}} />
              <Form.Text className="text-muted">
                Type to change Title of Slide 1
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Slide 2</Form.Label>
              <Form.Control type="email" placeholder="Slide 2 Title" onChange={e => {setSlide2(e.target.value)}} />
              <Form.Text className="text-muted">
                Type to change Title of Slide 2
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
    </Container>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import React, { useState, useEffect, Component } from 'react';
import './App.css';
// or less ideally
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Carousel, Container, Jumbotron, Table, Row, Col, Form } from 'react-bootstrap';

class App extends React.Component {
  defaultProps = {
    min : 97,
    max : 122
  }
  constructor(props) {
    super(props);
    this.state = {counter: this.defaultProps.min};
  }

  plus(){
    if(this.state.counter < this.defaultProps.max){
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }
  minus(){
    if(this.state.counter > this.defaultProps.min){
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }
  

  render(){
    return (
      <div style={{width:'100%', flex:1, paddingLeft:'20%', alignItems:'center', justifyContent:'center'}}>
          <Row style={{alignItems:'center', alignContent:'center', justifyContent:'center'}}>

            {/* Button Minus */}
            <Col>
              <Button onClick={() => {this.minus()}}>+</Button>
            </Col>

            {/* Displaying */}
            <Col xs={5}>
              <Jumbotron style={{witdh:1000, height:100, backgroundColor:'#fff'}}>
                <h1 style={{textTransform:'uppercase'}}>{String.fromCharCode(this.state.counter)}</h1>
              </Jumbotron>
            </Col>

            {/* Button Minus */}
            <Col>
              <Button onClick={() => {this.plus()}}>+</Button>
            </Col>
          </Row>
      </div>
    )
  }
}

export default App;

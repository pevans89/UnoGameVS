import React, { useState, Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ShowCard from './ShowCard';
import Hand from './ShowHand';
import TopCard from './TopCard';
import Image from 'react-bootstrap/Image';

import './App.css';
import { CarouselItem, Row, Col } from 'react-bootstrap';




class App extends Component {
  constructor(props) { // where we can set the state
    super(props);
    this.state = { initial: true, data: { topDiscard: "" } };

  }

  componentDidMount() {
    const unoUrl = "http://localhost:8080/games";


    // a promise chain
    fetch(unoUrl)
      .then(data => {
        let d = data.json();
        console.log(d);

        return d;

      })

      .then(data => {

        console.log(data);

        // this.setState({ data })
      });

  }
  getRandom() {

    return Math.floor(Math.random() * 53);

  }

  turn = () => {
    const unoUrl = "http://localhost:8080/games";
    


    // a promise chain
    fetch(unoUrl, {

      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "gameId": "TestGame2" })

    })
      .then(data => {
        let d = data.json();
        console.log(d);

        return d;
      })


      .then(data => {

        console.log(data);

        this.setState({ initial: false, data })
      });
    // this.setState({ initial: false });
    
  }






  render() {

    return (
      <div>

        <div >
          <Image src={process.env.PUBLIC_URL + '/small_cards/Uno_logo.png'} className="logo" alt='back' fluid />
        </div>
        <Container>
          <Row>
            <Col>
              <Hand
                hand={this.state.initial ? {} : this.state.data.hands[0]}
                initial={this.state.initial}
                card={this.state.initial ? {} : this.state.data.i === 0 ? this.state.data.card : null}
                name='Bob'></Hand>
            </Col>
            <Col>
              <Hand
                hand={this.state.initial ? {} : this.state.data.hands[1]}
                initial={this.state.initial}
                card={this.state.initial ? {} : this.state.data.i === 1 ? this.state.data.card : null}
                name='Ninja'></Hand>
            </Col>
          </Row>

          <Row>
            <Col>
              <Hand
                hand={this.state.initial ? {} : this.state.data.hands[2]}
                initial={this.state.initial}
                card={this.state.initial ? {} : this.state.data.i === 2 ? this.state.data.card : null}
                name='Gon'></Hand>
            </Col>
            <Col>
              <Hand
                hand={this.state.initial ? {} : this.state.data.hands[3]}
                initial={this.state.initial}
                card={this.state.initial ? {} : this.state.data.i === 3 ? this.state.data.card : null}
                name='Killua'></Hand>
            </Col>
          </Row>


          <TopCard topCard={Object.assign({}, this.state.data.topDiscard)} card={this.state.initial ? {} : this.state.data.i === 0 || this.state.data.i === 1 || this.state.data.i === 2 || this.state.data.i === 3 ? this.state.data.card : null} initial={this.state.initial}></TopCard>
          <Button variant="primary" onClick={this.turn} size="lg">Next Turn</Button>{' '}
        </Container>

      </div>);
  }
}


export default App;

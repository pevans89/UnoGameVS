
import React, { useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import ShowCard from './ShowCard';
import cardInfo from './CardInfo';
import translateCard from './translateCard';

class Hand extends Component {

    render() {

        let set = [];
        let num = this.props.initial ? 1 : this.props.hand.hand.length;
        let status = 'WINNER!';



        for (let i = 0; i < num; i++) {
            let randNum = this.props.initial ? 0 : Math.floor(Math.random() * 53);

            set.push(
                <Carousel.Item ><ShowCard className="card" initial={this.props.initial} card={this.props.initial ? {} : this.props.hand.hand[i]}></ShowCard></Carousel.Item>

            )

        }



        return (
            <div>

                <h2 className='text' >{this.props.initial !== true ? this.props.name + ' has ' + num + ' cards' : this.props.name + ' is ready!'} </h2>
                <h4 className='text'>{this.props.initial !== true ? num === 1 ? " " + "UNO!" : " " : ''}  </h4>
                <h4 className='text'>{num === 0 ? " " + status : " "}  </h4>




                { num > 0 ? 
                <div>
                <Carousel className='hand' interval={null}>
                    {set}
                </Carousel>
                <h5 className='text'> {this.props.initial !== true ? this.props.card !== null ? this.props.name + ' is playing!' : this.props.name + " is waiting..." : ''}  </h5>
                </div>: <span></span> }
            </div>);
    }
}

export default Hand; 
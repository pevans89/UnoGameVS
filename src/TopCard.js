import React, { Component } from 'react';
import cardInfo from './CardInfo';
import ShowCard from './ShowCard';
import translateCard from './translateCard';
import Hand from './ShowHand';
class TopCard extends Component {


    render() {

        let { value, color } = this.props.topCard;

        if (this.props.initial !== true) {

        }
        let set = [];


        set.push(
            <ShowCard className="card" initial={this.props.initial} card={this.props.topCard}></ShowCard>

        )



        return (
            <div>

                <h2 className='text' >Top Card</h2>
                <h4 className='text'>  {this.props.initial !== true ? this.props.card !== null ? this.props.card.value === 'WILD' ? ' Wild being played color Blue '
                    : this.props.card.value === 'WILD_DRAWFOUR' ? ' Wild being played color Blue ' : this.props.card.value === 'SKIP' ? ' Player being Skipped '
                        : this.props.card.value === 'REVERSE' ? ' Reverse is on ' : this.props.card.value === 'DRAWTWO' ? ' Player draws 2 cards '
                            : 'will be a ' + this.props.card.color + ' ' + this.props.card.value : "" : ''}  </h4>
                {set}


            </div >);
    }


}

export default TopCard;
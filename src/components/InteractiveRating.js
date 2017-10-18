import React, { Component } from 'react';
import Rating from './Rating';
import Message from './Message';
import styled from 'styled-components';


const textColor = '#4A4A4A';
const borderColor = '#D2D0D2';
const Button = styled.button`
    background: #fff;
    color: ${textColor};
    font-size: 14px;
    line-height: 27px;	
    border: 1px solid ${borderColor};
    border-radius: 5px;
    width: 84px;

    &:hover {
        background: #f1f1f1;
    }
`;

const Title = styled.h3`
    color: ${textColor};
    font-size: 18px;
    font-weight: bold;
`;

const BoxWithShadow = styled.div`
    border: 1px solid ${borderColor};
    border-radius: 5px;
    display: block;
    padding: 25px;
    box-sizing: border-box;
    box-shadow: inset #C7C6C8 0 0 4px 1px;
`;

class InteractiveRating extends Component {

    constructor() {
        super();
        this.state = {
            submited: false
        }
    }

    submitRate(rate, e) {
        e.preventDefault();
        this.setState({
            submited: true
        })
    }

    render() {
        let rateBlockDisabled = '';
        let message = '';
        
        if(this.state.submited) {
            message = <Message />;
            rateBlockDisabled = 'disabled';
        }

        return ( 
            <form className="rate-component--interective" action="" 
                onSubmit={this.submitRate.bind(this, this.state.starIndex)}>
                { message }
                <BoxWithShadow className={'rating-container container-boxshadow flex-column ' + rateBlockDisabled }>
                    <Title className="rating-title">Rate this product</Title>
                    <Rating starSize={27} interactive  />
                    <Button type="submit" className="button">Apply</Button>
                </BoxWithShadow>
            </form>
        );
    }
}

export default InteractiveRating;
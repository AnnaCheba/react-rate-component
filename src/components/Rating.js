//@flow
import React, { Component } from 'react';
import RateStar from './RateStar';

import PropTypes from 'prop-types';

class Rating extends Component {
    constructor(props) {
        super();
        this.state = {
            score: props.score
        }
    }

    setSelectedStar(index) {
        if(this.props.interactive) {
            this.setState({
                score: index
            });
        }
    }

    // Render the stars
    // return an array of RateStars component
    returnStarsGroup() {
        let rateStars = [];

        for(var i = 1; i <= this.props.maxRate; i++) {
            rateStars.push(
                <RateStar 
                    key={i} 
                    index={i} 
                    filled={i<=this.state.score} 
                    onClick={this.setSelectedStar.bind(this, i)} 
                    starSize={this.props.starSize}
                />
            );
        }
        return rateStars;
    }

    render() { 
        let interactiveSelectore = this.props.interactive ? ' interactive' : '' ;
        let reatingScore = this.props.score;
        let maxScore = this.props.maxRate;

        return (
            <span className={'rating' + interactiveSelectore} role="img" 
                    aria-label={'Rating ' + reatingScore + ' out of ' + maxScore}>
                { this.returnStarsGroup() }
            </span>
        );
    }
}

Rating.propTypes = {
    maxRate: PropTypes.number,
    interactive: PropTypes.bool,
    score: PropTypes.number,
    starSize: PropTypes.number
}

Rating.defaultProps = {
    maxRate: 5,
    score: 0,
    starSize: 21
}

export default Rating;

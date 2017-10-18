//@flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RateStar = (star) => {
    let starStyle = star.filled ? 'active-color' : 'default-color';
    let starSize = star.starSize;
    
    return (
        <SpanStar propActive={star.filled} aria-label={star.index + ' Star'} onClick={ star.onClick } className={ starStyle }>
            <svg viewBox="0 0 512 512"
                widt={starSize}
                height={starSize}>
                <path 
                    d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z">
                </path>
            </svg>
            <SpanHidden className="visuallyhidden">{star.index + ' Star'}</SpanHidden>
        </SpanStar>
    );
}    

const ratingColorDefault = '#E3E6E9';
const ratingColorActive = '#4A90E2';

const SpanStar = styled.span`
    fill: ${props => props.propActive ? ratingColorActive : ratingColorDefault };
    transition: all 300ms ease;
`;

const SpanHidden = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;

    &:not(:focus):not(:active) {

    }
`

RateStar.propTypes = {
    onClick: PropTypes.func,
    filled: PropTypes.bool,
}

RateStar.defaultProps = {
    filled: false,
}

export default RateStar;
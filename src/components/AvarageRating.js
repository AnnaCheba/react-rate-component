//@flow
import React from 'react';
import Rating from './Rating';
import styled from 'styled-components'

const borderColor = '#D2D0D2';

const Box = styled.div`
    border: 1px solid ${borderColor};
    border-radius: 5px;
    display: flex;
    padding: 25px;
    box-sizing: border-box;
`;

const AvarageRating = () =>  {    
    return (
        <Box className="rating-container rate-component--noninterective">
            <h4>Avarage rating</h4>
            <Rating score={3} />
        </Box>
    );
}

export default AvarageRating;

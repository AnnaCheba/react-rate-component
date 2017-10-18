//@flow
import React from 'react';
import styled from 'styled-components';

const MassegeStyles = styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    padding: 17px 10px;
    text-align: center;
    margin-bottom: 5px;
    background: #7ED321;
`;

const Message = function() {
    return (
        <MassegeStyles className="message succsess">
            Thanks for your rating!
        </MassegeStyles>
    );
}

export default Message;
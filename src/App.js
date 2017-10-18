// @flow
import React from 'react';
import AvarageRating from './components/AvarageRating';
import InteractiveRating from './components/InteractiveRating';
import { injectGlobal } from 'styled-components';

//import './styles/App.css';

injectGlobal`
    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
`;

const App = () => {
    return ( 
        <div className = "App" >
            <InteractiveRating />
            <AvarageRating />
        </div>
    );
}

export default App;
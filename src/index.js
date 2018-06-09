import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarWarCharacter from './StarWarCharacters';
import StarWarsHeader from './Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StarWarsHeader />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import './App.css';
import StarWar from './star_wars.png';
import StarWarCharacter from './StarWarCharacters';

const StarWarsHeader = () => {
  return(
    <div className="MainApp">
    <div className="App">
    <header className="App-header">
      <img src={StarWar} className="App-logo" alt="logo" />
    </header>
    </div>
    <div className="characters">
    <StarWarCharacter />
    </div>
    </div>
  );
}

export default StarWarsHeader;

import React from 'react';
import Popup from "reactjs-popup";
import './App.css';

class StarWarCharacter extends React.Component {
  constructor(props){
    super(props);
    this.state={characters:'', open:false, selectedCharacter:''};
  }

  componentDidMount(){
    /* fetch the people infromation from the below url and set character state with json reterived */
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({characters:data});
    })
  }
  listElementClicked(key, event){
  const char = this.state.characters.results;
  char.map( (data) => {
    if(data.name === key){
      this.setState({ open: true, selectedCharacter: key });
      return true;
    }

  });
  }

  closeModal = () => {
    this.setState({ open: false });
  };


  render(){
    let peopleList = '';
    let selectedList ='';
    const char = this.state.characters.results;
    const sValue = this.state.selectedCharacter;

    if(char){
    peopleList = char.map( (character, i) => {
      let keyData = character.name;
      return( <ul key = {i}>
        <li onClick = {this.listElementClicked.bind(this, keyData)} > { character.name }</li>
      </ul>
    );
    });
    }
    /* if user clicked a character then create a list for that chacter details */
    if(sValue) {
      selectedList = char.map( (data,i) => {
        if(data.name === sValue)
          return(<ul key = {i}>
            <li>{ data.name }</li>
            <li>{ data.hair_color }</li>
            <li>{ data.skin_color }</li>
            <li>{ data.eye_color }</li>
            <li>{ data.gender }</li>
            <li><a href={data.homeworld}>{ data.homeworld }</a></li>
            <li><a href={data.species}>{ data.species }</a></li>
            <li><a href={data.url}>{ data.url }</a></li>
            </ul>)
        
      });
    }

    return(
      <div>
      {peopleList}  /* display list of people in star_wars api */
      /* creating popup to show the character respective details */
      <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            <div className="popup">
            {selectedList}
            </div>
          </div>
        </Popup>
      </div>
    );
  }
};

export default StarWarCharacter;

import React, { Component } from 'react';
import CharacterSelect from "../components/CharacterSelect";
import MainFooter from '../components/MainFooter';

export default class MainContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            characters: [],
            // all characters names are unique so should be keys
            selectedCharacterName: ""
        };

        this.handleNameSelected = this.handleNameSelected.bind(this);
    }

// make sure we can actually access the Harry Potter api
componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({characters: data}))
}

handleNameSelected(name){
    this.setState({selectedCharacterName: name})
}


    render(){

const selectedName = this.state.characters.find(character => {
    return character.name = this.state.selectedCharacterName;
})

        return(
            <div className="content">
                <h2>Harry Potter characters</h2>
                    <CharacterSelect 
                    characters={this.state.characters}
                    onCharacterSelected = {this.handleNameSelected}
                    />
                    <MainFooter />
            </div>
           
        )
    }
}

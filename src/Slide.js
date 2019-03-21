import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchChar }  from './actions'; 

class Slide extends Component {
  handleCharacterClick(movieId){
    this.props.fetchChar()
  }

  render() {
    return (

      <svg viewBox="0 0 800 800" version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        
          <text id="movie-title" 
            fontFamily="Josefin Sans" 
            fontSize="34" 
            fontStyle="condensed" 
            fontWeight="normal" 
            fill="#008F68">
            <tspan x="350" y="300">
              {this.props.title}
            </tspan>
          </text>

          <a xlinkHref={"/"+this.props.episode_id+"/characters/"}
            onClick="this.handleCharacterClick({this.props.episode_id})">
            <text id="character-link" 
              fontFamily="Josefin Sans" 
              fontSize="30" 
              fontStyle="condensed" 
              fontWeight="normal" 
              fill="#008F68">
              <tspan x="350" y="400">
                Characters
              </tspan>
            </text>
          </a>
      </svg>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  chars: state.chars
});
  
const mapDispatchToProps = {
  fetchChar
}

export default connect(mapStateToProps, mapDispatchToProps)(Slide);


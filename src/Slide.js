import React, { Component } from 'react';
import './App.css';

class Slide extends Component {

  handleSubtitleClick = (e) => {
    e.preventDefault();
    //window.location=`/${this.props.subtitle}/`;
    this.props.fetchChar()
  }

  render() {

    return (

      <svg viewBox="0 0 800 800" version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        key={this.props.index}>
        
          <text id="title" 
            fontFamily="Josefin Sans" 
            fontSize="34" 
            fontStyle="condensed" 
            fontWeight="normal" 
            fill="#008F68">
            <tspan x="350" y="300">
              {this.props.title}
            </tspan>
          </text>

          {/* <use xlinkHref={"/"+this.props.subtitle+"/"}
            // onClick="this.props.handleCharacterClick()"
            > */}
          <a 
          href={"/"+this.props.subtitle+"/"}
              onClick={this.props.handleSubtitleClick}
          >
            <text id="subtitle-link" 
              fontFamily="Josefin Sans" 
              fontSize="30" 
              fontStyle="condensed" 
              fontWeight="normal" 
              fill="#008F68">
              <tspan x="350" y="400">
                {this.props.subtitle}
              </tspan>
            </text>
          </a>
      </svg>
    )
  }
}

export default Slide


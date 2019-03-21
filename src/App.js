import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchMovieData, fetchChar }  from './actions'; 
import Slide from './Slide'; 

class App extends Component {
  componentDidMount(){
    this.props.fetchMovieData();
  }





  render() {
    const { movies, chars, isChildPage } = this.props;
    return (
      <div className="App">
        {movies.length > 0 && !isChildPage &&
          movies.map((movie, index) => (
            <Slide title={movie.title}
                   //charList={movie.characters}
                   //movieId= { movie.episode_id ? movie.episode_id : null }
                   //handleSubtitleClick={this.handleSubtitleClick}
                   //fireClickWith={movie.episode_id}
                   subtitle="Characters" 
                   index={index}
                   />
          ))
        }
        {chars.length > 0 && isChildPage &&
          chars.map((char, index) => (
            <Slide title={char} 
                   subtitle="Species" 
                   //handleSubtitleClick={this.handleSubtitleClick}
                   //fireClickWith={char.species}
                   index={index}

                   />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  chars: state.chars,
  isChildPage: state.isChildPage
});

const mapDispatchToProps = {
  fetchMovieData,
  fetchChar
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


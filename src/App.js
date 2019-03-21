import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchData }  from './actions'; 
import Slide from './Slide'; 

class App extends Component {
  componentDidMount(){
    this.props.fetchData();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="App">
        {data &&
          data.map((movie, index) => (
            <Slide title={movie.title} episode_id={movie.episode_id} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


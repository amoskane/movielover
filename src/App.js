import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchData }  from './actions'; 

class App extends Component {
  componentDidMount(){
    this.props.fetchData();
  }

  render() {

    return (
      <div className="App">
        {/* <ul> */}
            {/* {Object.keys(this.props.data).forEach(key => {
              console.log(key)
            })}; */}
        {/* </ul> */}
        {JSON.stringify(this.props.data)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

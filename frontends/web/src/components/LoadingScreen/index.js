import React, { Component } from 'react';
import {connect} from 'react-redux'

class LoadingScreen extends Component {
  render(){
    const {loading, children } = this.props
    if(loading){
      return <h1 data-test-id="loading-screen">Loading...</h1>;
    }
    return children
  }
};

const mapStateToProps =({loading}) =>({
  loading
})


export default connect(mapStateToProps, null)(LoadingScreen);

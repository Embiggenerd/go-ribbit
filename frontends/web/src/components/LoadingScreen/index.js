import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from './actions';
import LoaderImage from './loaderImage'

// Makes a call to authenticate user. If authenticated, displays children passed
// to it in App component
class LoadingScreen extends Component {
  componentDidMount() {
    this.props.authUser();
  }
  render() {
    const { loading, children } = this.props;
    if (loading) {
      return (
        <div className="loader-image">
          <LoaderImage/>
        </div>
      );
    }
    return children;
  }
}

const mapStateToProps = ({ loading }) => ({
  loading
});

export default connect(
  mapStateToProps,
  { authUser }
)(LoadingScreen);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from './actions';
import LoaderImage from './loaderImage'

class LoadingScreen extends Component {
  componentDidMount() {
    this.props.authUser();
  }
  render() {
    const { loading, children } = this.props;
    if (loading) {
      // return <h1 data-test-id="loading-screen">Loading...</h1>;
      return (
        <div className="loader-image">
          {/* return{' '} */}
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

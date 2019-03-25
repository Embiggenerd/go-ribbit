import React from 'react'
import { noMatchAC } from './actions'

const NoMatch = ({location, noMatchAC}) => {
  const message = `No match for ${location.path}`
  const error = {
    code: "404",
    message
  }
  noMatchAC(error)
}

const mapStateToProps = ({ auth, userForm }) => ({ auth, userForm });

const mapDispatchToProps = {
  noMatchAC
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoMatch)
);
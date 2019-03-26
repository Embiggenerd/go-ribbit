import React from 'react'
import { noMatchAC } from './actions'
import { withRouter} from "react-router"
import { connect } from 'react-redux';


const NoMatch = ({location, noMatchAC}) => {
  const message = `No match for ${location.pathname}`
  const error = {
    code: "404",
    message
  }
  noMatchAC(error)
  
  return null
  
}

const mapStateToProps = ({ auth, userForm }) => ({ auth, userForm});

const mapDispatchToProps = {
  noMatchAC
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoMatch)
);
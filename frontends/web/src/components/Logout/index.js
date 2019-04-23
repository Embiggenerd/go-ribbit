import React from 'react';
import { connect} from "react-redux"
import {logoutUser} from "./actions" 

const logout = ({logoutUser}) => {

  return (
    <button onClick={logoutUser} >Logout</button>
  )

}

const mapStateToProps = ({auth}) =>({auth})

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(logout)
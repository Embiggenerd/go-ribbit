// connected component, only has access to auth. Displays AuthedIndex
// or UnauthedIndex depending on value of auth
import React from 'react'
import { connect } from 'react-redux'
import UnauthedIndex from '../UnauthedIndex'
import AuthedIndex from '../AuthedIndex'

const Index = ({auth}) => {
  if(auth) {
    return <AuthedIndex />
  }
  return <UnauthedIndex />
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, null)(Index)
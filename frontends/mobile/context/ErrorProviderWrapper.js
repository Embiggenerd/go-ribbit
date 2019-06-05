import React from 'react';
// import { ErrorProvider } from '../context';
import ErrorContext from './errorContext';
const ErrorProvider = ErrorContext.Provider;

export default class ErrorProviderWrapper extends React.Component {
  constructor() {
    super();
    this.onError = this.onError.bind(this);
  }
  state = {
    error: '',
    message: '',
    code: null
  };
  render() {
    return (
      <ErrorProvider value={{ error:this.state, handleError: this.onError }}>
        {this.props.children}
      </ErrorProvider>
    );
  }
 
  onError(error, code, message) {
    this.setState({
      error,
      message,
      code
    },()=>{
      console.log('new error state:',this.state)
    });
  }
}

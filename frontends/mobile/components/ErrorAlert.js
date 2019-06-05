import React from 'react';
import { Alert } from './subcomponents';
import { ErrorConsumer } from '../context';

export default (ErrorAlert = () => {
  
  return (
    <ErrorConsumer>
      {({ error, handleError }) => {
        console.log('errorAlert called', handleError)
        if(!error.error){ 
          return null
        }
        return <Alert handleError={handleError} error={error.error} message={error.message} code={error.code} />
      }}
      
    </ErrorConsumer>
  );
});

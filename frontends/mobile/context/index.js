import UserContext from '../context/userContext';
// import ErrorContext from '../context/userContext';
import ErrorContext from './errorContext'
// export {default as ErrorProviderWrapper} from './ErrorProviderWrapper
import ErrorProviderWrapper from './ErrorProviderWrapper'

module.exports = {
  UserConsumer: UserContext.Consumer,
  UserProvider: UserContext.Provider,
  ErrorConsumer: ErrorContext.Consumer,
  // ErrorProvider: ErrorContext.Provider,
  ErrorProviderWrapper
};

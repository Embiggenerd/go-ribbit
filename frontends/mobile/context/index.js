import UserContext from '../context/userContext';
import ErrorContext from './errorContext'
import ErrorProviderWrapper from './ErrorProviderWrapper'
import UserProviderWrapper from './UserProviderWrapper'

module.exports = {
  UserConsumer: UserContext.Consumer,
  UserProvider: UserContext.Provider,
  ErrorConsumer: ErrorContext.Consumer,
  ErrorProviderWrapper,
  UserProviderWrapper
};

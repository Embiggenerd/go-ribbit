import UserContext from '../context/userContext';
import ErrorContext from '../context/userContext';
import ErrorProvider from './ErrorProvider'

module.exports = {
  UserConsumer: UserContext.Consumer,
  UserProvider: UserContext.Provider,
  ErrorConsumer: ErrorContext.Consumer,
  ErrorProvider,
};

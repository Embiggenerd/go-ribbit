import React from 'React';
import { UserConsumer, ErrorConsumer } from '../context';
import { SignupForm } from '../components';

export default (SignupScreen = ({ navigation }) => {
  return (
    <ErrorConsumer>
      {({handleError}) => (
        <UserConsumer>
        {({ changeUserContext }) => (
          <SignupForm
            changeUserContext={changeUserContext}
            navigation={navigation}
            handleError={handleError}
          />
        )}
      </UserConsumer>
      )}
    </ErrorConsumer>
  );
});

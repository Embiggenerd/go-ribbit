import React, { Component } from 'React';
import { UserConsumer } from '../context';
import { Timeline } from '../components';

// export default class TimelineScreen extends Component {
//   render() {
//     return (
//       <UserConsumer>
//         {({ user, changeUserContext }) => (
//           <Timeline
//             user={user}
//             changeUserContext={changeUserContext}

//           />
//         )
//         // <View>
//         //   <Text>{user.username}+"'s TIMELINE"</Text>
//         //   <Button title="Logout" onPress={this._handleLogoutPress} />
//         // </View>
//         }
//       </UserConsumer>
//     );
//   }
// }

export default (TimelineScreen = ({ navigation }) => {
  return (
    <UserConsumer>
      {({ user, changeUserContext }) => (
        <Timeline
          username={user.username}
          changeUserContext={changeUserContext}
          navigate={navigation.navigate}
        />
      )
      // <View>
      //   <Text>{user.username}+"'s TIMELINE"</Text>
      //   <Button title="Logout" onPress={this._handleLogoutPress} />
      // </View>
      }
    </UserConsumer>
  );
}); 

// const wrapper = () => (<UserConsumer>
//   {({ user, changeUserContext }) => ()}
//     <UserConsumer>

// )
// export default

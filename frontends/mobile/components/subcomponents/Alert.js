import React from 'react';
// import ReactNative from ''
import DropDownAlert from 'react-native-dropdownalert';

export default class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.handleAlertClose = this.handleAlertClose.bind(this);
  }

  componentDidMount() {
    this.renderAlert();
    console.log('alert mounted', this.props);
  }

  renderAlert() {
    const { error, message, code } = this.props;
    this.dropdown.alertWithType('error', message, code, {}, 2000);
  }

  handleAlertClose() {
    this.props.handleError('', null, '');
  }

  render() {
    return (
      <DropDownAlert
        defaultContainer={{
          padding: 8,
          paddingTop: 30,
          flexDirection: 'row',
          showCancel: true,
        }}
        ref={ref => (this.dropdown = ref)}
        onClose={this.handleAlertClose}
      />
    );
  }
}

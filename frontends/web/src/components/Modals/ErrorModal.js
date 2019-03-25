import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from 'react-dom';
import Modal from './Modal';
import { handleCloseModal } from './actions';

let node = null;
class ModalWrapper extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.error !== nextProps.error) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    const { error, onClose } = this.props;
    ReactDOM.render(
      <Modal onClose={onClose} code={error.code} message={error.message} />,
      node
    );
  }

  componentDidMount() {
    node = document.createElement('div');
    document.body.appendChild(node);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(node);
    node.parentNode && node.parentNode.removeChild(node);
  }

  render() {
    return <script />;
  }
}

const mapStateToProps =({error}) =>({
  error
})
const mapDispatchToProps = {
  onClose: handleCloseModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);

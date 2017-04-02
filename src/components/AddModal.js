import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isShowingModal: false,
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

  handleClick() {
      this.setState({isShowingModal: true});
  }

  handleClose() {
      this.setState({isShowingModal: false});
  }

  render() {
    return <div  onClick={() => this.handleClick() }>
    modal
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={() => this.handleClose() }>
          <ModalDialog onClose={ () => this.handleClose() }>
            <h1>Dialog Content</h1>
            <p>More Content. Anything goes here</p>
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}

export default AddModal;

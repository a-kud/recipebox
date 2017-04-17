import React from "react";
import RecipeForm from "./RecipeForm";
import {ModalContainer, ModalDialog} from "react-modal-dialog";

//opens up modal window with add button
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isShowingModal: false,
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleRecipeChange = this.handleRecipeChange.bind(this);
      this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleClick() {
      this.setState({isShowingModal: true});
    }

    handleClose(e) {
      this.setState({isShowingModal: false});
    }

    handleRecipeChange(e) {
      this.props.onRecipeChange(e);
    }

    handleRecipeSubmit(e) {
      this.props.onRecipeSubmit(e);
    }

  render() {
    return <div>
    <button  onClick={() => this.handleClick() }> Add Recipe </button>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={() => this.handleClose() }>
          <ModalDialog onClose={ () => this.handleClose() }>
            <RecipeForm recipe={this.props.recipe}
                        onRecipeChange={this.handleRecipeChange}
                        handleFormSubmit={this.handleRecipeSubmit}/>
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}

export default Modal;

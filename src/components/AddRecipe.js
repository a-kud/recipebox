import React from "react";
import RecipeForm from "./RecipeForm";
import {ModalContainer, ModalDialog} from "react-modal-dialog";

//opens up modal window with add button
class AddRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isShowingModal: false,
      };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleClick() {
        this.setState({isShowingModal: true});
    }

    handleClose() {
        this.setState({isShowingModal: false});
    }

    handleRecipeSubmit(e) {
        this.handleClose();
        this.props.onRecipeSubmit(e);
    }

  render() {
    return <div>
    <button  onClick={() => this.handleClick() }> Add Recipe </button>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={() => this.handleClose() }>
          <ModalDialog onClose={ () => this.handleClose() }>
            <RecipeForm handleFormSubmit={this.handleRecipeSubmit}
                        />
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}

export default AddRecipe;

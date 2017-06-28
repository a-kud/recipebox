import React from "react";
import RecipeForm from "./RecipeForm";

import {ModalContainer, ModalDialog} from "react-modal-dialog";

class EditRecipe extends React.Component {
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
        return (
            <div>
            <button onClick={this.handleClick}>Edit</button>
            {
              this.state.isShowingModal &&
              <ModalContainer onClose={() => this.handleClose() }>
                <ModalDialog onClose={ () => this.handleClose() }>
                  <RecipeForm recipe={this.props.recipe}
                              handleFormSubmit={this.handleRecipeSubmit}/>
                </ModalDialog>
              </ModalContainer>
            }
            </div>
        );
    }
}

export default EditRecipe;

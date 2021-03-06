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
        this.handleRecipeChange = this.handleRecipeChange.bind(this);
    }

    handleClick() {
        this.setState({isShowingModal: true});
    }

    handleClose() {
        this.setState({isShowingModal: false});
    }

    handleRecipeSubmit(...args) {
        this.handleClose();
        this.props.onRecipeSubmit(...args);
    }

    handleRecipeChange(propName, e) {
        this.props.onRecipeChange(propName, e);
    }

  render() {
    return <div>
    <button className="shadow-bottom btn-recipe-action"  onClick={() => this.handleClick() }>
        {this.props.actionTitle}
    </button>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={() => this.handleClose() }>
          <ModalDialog onClose={ () => this.handleClose() }>
            <RecipeForm actionTitle={this.props.actionTitle}
                        action={this.props.action}
                        handleFormSubmit={this.handleRecipeSubmit}
                        name={this.props.name}
                        editedName={this.props.editedName}
                        id={this.props.id}
                        ingridients={this.props.ingridients}
                        handleRecipeChange={this.handleRecipeChange}
                        />
          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}

export default AddRecipe;

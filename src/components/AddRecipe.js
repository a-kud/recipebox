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

    handleRecipeSubmit(e) {
        //this.handleClose();
        this.props.onRecipeSubmit(e);
    }

    handleRecipeChange(propName, e) {
        console.log("change")
        this.props.onRecipeChange(propName, e);
    }

  render() {
    return <div>
    <button  onClick={() => this.handleClick() }> {this.props.actionTitle} </button>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={() => this.handleClose() }>
          <ModalDialog onClose={ () => this.handleClose() }>
            <RecipeForm actionTitle={this.props.actionTitle}
                        action={this.props.action}
                        handleFormSubmit={this.handleRecipeSubmit}
                        name={this.props.name}
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

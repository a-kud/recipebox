import React from "react";
import Accordion from "./Accordion";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editedName: this.props.name,
            editedIngridients: this.props.ingridients,
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangeFor = this.handleChangeFor.bind(this);
    }

    handleFormSubmit(e, ...args) {
        e.preventDefault();
        if (this.props.action == "edit") {
            this.props.handleFormSubmit(this.props.id, this.state);
        } else {
            this.props.handleFormSubmit();
        }

    }

    handleChangeFor(propName, e) {
        if (this.props.action == "edit") {
            this.setState({[propName]: e.target.value})
        } else {
            this.props.handleRecipeChange(propName, e);
        }
    }

    render() {
        let isActionAdd = this.props.action == "add";

        return (
            <form id="recipe_submit" onSubmit={this.handleFormSubmit}>
                <h1> {this.props.actionTitle} </h1>
                <hr/>
                <label htmlFor="recipe_name"> Recipe
                    <input id="recipe_name"
                           type="text"
                           onChange={ e => {
                               if (isActionAdd) {
                                   this.handleChangeFor("currentName", e)
                               } else {
                                   this.handleChangeFor("editedName", e)
                               }
                           }}
                           value={isActionAdd ?
                               this.props.name : this.state.editedName} // this.props.action == "add" ? this.props.name : this.state.currentName
                           required
                           />
                </label>
                <label htmlFor="ingridients"> Ingridients
                    <textarea
                        id="ingridients"
                        rows="4"
                        placeholder="Comma,separated"
                        onChange={ e => {
                            if (isActionAdd) {
                                this.handleChangeFor("currentIngridients", e)
                            } else {
                                this.handleChangeFor("editedIngridients", e)
                            }
                        }}
                        value={isActionAdd ?
                          this.props.ingridients : this.state.editedIngridients} //this.props.action == "add" ? this.props.ingridients : this.state.currentIngridients
                        required>
                    </textarea>
                </label>
                <input className="btn-recipe-action" type="submit" value={this.props.actionTitle} />
            </form>
        );
    }
}

export default RecipeForm;

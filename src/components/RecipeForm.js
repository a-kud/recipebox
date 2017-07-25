import React from "react";
import Accordion from "./Accordion";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChangeFor = this.handleChangeFor.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.handleFormSubmit(e);
    }

    handleChangeFor(propName, e) {
        this.props.handleRecipeChange(propName, e);
    }

    render() {

        return (
            <form id="recipe_submit" onSubmit={this.handleFormSubmit}>
                <h1> {this.props.actionTitle} </h1>
                <hr/>
                <label htmlFor="recipe_name"> Recipe
                    <input id="recipe_name"
                           type="text"
                           onChange={ e => this.handleChangeFor("currentName", e) }
                           value={this.props.name}
                           required
                           />
                </label>
                <label htmlFor="ingridients"> Ingridients
                    <textarea id="ingridients"
                              rows="4"
                              placeholder="Comma,separated"
                              onChange={ e => this.handleChangeFor("currentIngridients", e) }
                              value={this.props.ingridients}
                              required></textarea>
                </label>
                <input type="submit" value="Add Recipe" />
            </form>
        );
    }
}

export default RecipeForm;

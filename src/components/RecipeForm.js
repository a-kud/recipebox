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
        // if (this.props.action == "edit") {
        //     this.setState({[propName]: e.target.value})
        // } else {
            this.props.handleRecipeChange(propName, e);
        // }
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
                           value={this.props.action == "add" ? this.props.name : this.props.editedName} // this.props.action == "add" ? this.props.name : this.state.currentName
                           required
                           />
                </label>
                <label htmlFor="ingridients"> Ingridients
                    <textarea id="ingridients"
                              rows="4"
                              placeholder="Comma,separated"
                              onChange={ e => this.handleChangeFor("currentIngridients", e) }
                              value={this.props.ingridients} //this.props.action == "add" ? this.props.ingridients : this.state.currentIngridients
                              required></textarea>
                </label>
                <input type="submit" value={this.props.actionTitle} />
            </form>
        );
    }
}

export default RecipeForm;

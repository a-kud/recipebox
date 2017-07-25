import React from "react";
import Accordion from "./Accordion";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.handleFormSubmit(e);
    }

    handleSubmitClick() {
        return (
            <Accordion />
        )
    }


    render() {
        return (
            <form id="recipe_submit" onSubmit={this.handleFormSubmit}>
                <h1> Add Your Recipe </h1>
                <hr/>
                <label htmlFor="recipe_name"> Recipe
                    <input id="recipe_name"
                           type="text"

                           required
                           />
                </label>
                <label htmlFor="ingridients"> Ingridients
                    <textarea id="ingridients"
                              rows="4"
                              placeholder="Comma,separated"
                              required></textarea>
                </label>
                <input type="submit" value="Add Recipe" onClick={this.handleSubmitClick}/>
            </form>
        );
    }
}

export default RecipeForm;

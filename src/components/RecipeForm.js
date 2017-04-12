import React from "react";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onRecipeChange(e);
    }

    render() {
        return (
            <form id="recipe_submit">
                <h1> Add Your Recipe </h1>
                <hr/>
                <label htmlFor="recipe_name"> Recipe
                    <input id="recipe_name"
                           type="text"
                           onChange={this.handleChange}
                           required/>
                </label>
                <label htmlFor="ingridients"> Ingridients
                    <textarea id="ingridients"
                              rows="4"
                              onChange={this.handleChange}
                              placeholder="Comma,separated"
                              required></textarea>
                </label>
                <input type="submit" value="Add Recipe"/>
            </form>
        );
    }
}

export default RecipeForm;

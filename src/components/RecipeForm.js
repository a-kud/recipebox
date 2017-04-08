import React from "react";

class RecipeForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id="recipe_submit">
                <h1> Add Your Recipe </h1>
                <hr/>
                <label> Recipe
                    <input type="text" value={this.props.recipe.name} required/>
                </label>
                <label> Ingridients
                    <textarea rows="4" placeholder="Comma,separated" required></textarea>
                </label>
                <input type="submit" value="Add Recipe"/>
            </form>
        );
    }
}

export default RecipeForm;

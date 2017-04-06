import React from "react";

class RecipeForm extends React.Component {

    render() {
        return (
            <form id="recipe_submit">
                <h1> Add Your Recipe </h1>
                <hr/>
                <label> Recipe
                    <input type="text" required/>
                </label>
                <label> Ingridients
                    <input type="textarea" placeholder="Comma,separated" required/>
                </label>
                <input type="submit" value="Add Recipe"/>
            </form>
        );
    }
}

export default RecipeForm;

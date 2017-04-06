import React from "react";

class RecipeForm extends React.Component {

    render() {
        return (
            <form>
                <h1> Add Your Recipe </h1>
                <br>
                <label> Recipe
                    <input type="text"/>
                </label>
                <label> Ingridients
                    <input type="textarea" placeholder="Comma,separated"/>
                </label>
            </form>
        );
    }
}

export default RecipeForm;

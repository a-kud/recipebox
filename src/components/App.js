import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";

import {s4, guid} from "../helpers/guid";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };

        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleRecipeSubmit(e) {
        let recipes = this.state.recipes.slice();

        recipes.push({
            name: e.target[0].value,
            ingridients: e.target[1].value.split(","),
            id: guid(),
        });

        this.setState({recipes: recipes});

    }

    render() {

        let recipe = !this.state.recipesAdded ? null : this.createRecipe();

        let recipes = this.state.recipes.slice(),
            recipesList = recipes.map((recipe) =>
                <Accordion key={recipe.id} recipeName={recipe.name} ingridients={recipe.ingridients}/>
            );

        return (
            <div>
                <div className="background">
                    {recipesList}
                </div>
                <Modal onRecipeSubmit={this.handleRecipeSubmit} />
            </div>
        );
    };
}

export default RecipeBox;

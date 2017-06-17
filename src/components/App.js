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
        this.handleRecipeDelete = this.handleRecipeDelete.bind(this);
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

    handleRecipeDelete(id) {

        let recipes = this.state.recipes.slice();

        let index = recipes.map( (recipe) => recipe.id ).indexOf(id);

        this.setState({recipes: recipes.splice(index, 1)});

    }

    render() {

        let recipes = this.state.recipes.slice(),
            recipesList = recipes.map((recipe) =>
                <Accordion
                    key={guid()}
                    id={recipe.id}
                    delete={this.handleRecipeDelete}
                    recipeName={recipe.name}
                    ingridients={recipe.ingridients} />
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

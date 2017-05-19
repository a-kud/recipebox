import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            recipeSubmitted: false,
        };

        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleRecipeSubmit(e) {
        let recipes = this.state.recipes.slice();

        recipes.push({
            name: e.target[0].value,
            ingridients: e.target[1].value.split(","),
        });

        this.setState({recipes: recipes});

    }

    createRecipe() {

        return (
            <Accordion />
        );
    }

    render() {

        let recipe = !this.state.recipesAdded ? null : this.createRecipe();

        return (
            <div>
                <div className="background">
                    {this.createRecipe()}
                </div>
                <Modal onRecipeSubmit={this.handleRecipeSubmit} />
            </div>
        );
    };
}

export default RecipeBox;

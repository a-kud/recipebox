import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipesAdded: 0,
            recipes: [],
            recipeSubmitted: false,
        };

        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleRecipeSubmit(e) {
        let recipeCount = this.state.recipesAdded;
        let recipes = this.state.recipes.slice();

        recipes.push({
            name: e.target[0].value,
            ingridients: e.target[1].value.split(","),
        });

        this.setState({recipesAdded: recipeCount+1}, () => {
            this.setState({recipes: recipes});
        })

    }

    createRecipe() {

        return (
            <Accordion />
        )
        // recipeName={null}
        //            recipeIngredients={null}
        //            key={null}
    }

    render() {

        let recipe = !this.state.recipesAdded ? null : this.createRecipe();

        return (
            <div>
                <div className="background">
                    {recipe}
                </div>
                <Modal onRecipeSubmit={this.handleRecipeSubmit} />
            </div>
        );
    };
}

export default RecipeBox;

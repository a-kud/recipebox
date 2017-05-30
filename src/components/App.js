import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        };

        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleRecipeSubmit(e) {
        function guid() {
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                    s4() + '-' + s4() + s4() + s4();
        }

        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }

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
                <Accordion recipeName={recipe.name}/>
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

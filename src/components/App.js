import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*recipe: {
                name: "",
                ingridients: [],
            },*/
            recipesAdded: 0,
            recipes: [],
            recipeSubmitted: false,
        };

        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleRecipeSubmit(e) {
        let recipeCount = this.state.recipesAdded;
        let recipes = this.state.recipes.slice();

        e.persist();

        recipes.push({
            name: "",
            ingridients: []
        });

        this.setState({recipesAdded: recipeCount+1}, (event) => {

            let name = this.state.recipes[recipeCount].name;
            let ingridients = this.state.recipes[recipeCount].ingridients;

            this.setState({name: e.target[0].value});
            this.setState({ingridients: e.target[1].value.split(",")});

            this.setState({recipes: recipes});

        })

    }

    createRecipe() {
        // const name = this.state.recipe.name,
        //       ingridients = this.state.recipe.ingridients;
        //       console.log(this.state.recipe.name)
        //       console.warn(this.state.recipe.ingridients)

        return (
            <Accordion recipeName={null}
                       recipeIngredients={null}
                       key={null}/>
        )
    }

    render() {
        const /*name = this.state.recipe.name,
              ingridients = this.state.recipe.ingridients,*/
              recipe = this.state.recipe;

        /*if (this.state.recipeSubmitted) {
            return (
                <div>
                    <div className="background">
                        {this.createRecipe()}
                    </div>
                    <Modal recipe={recipe} onRecipeSubmit={this.handleRecipeSubmit}
                                        />

                </div>
            );
        }
        else {*/
            return (
                <div>
                    <div className="background">
                    </div>
                    <Modal recipe={recipe} onRecipeSubmit={this.handleRecipeSubmit}
                                        />

                </div>
            );
        /*}*/

    };
}

export default RecipeBox;

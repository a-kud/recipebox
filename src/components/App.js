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

        console.log(e)

        recipes.push({
            name: "",
            ingridients: []
        });
        this.setState({recipes: recipes});

        this.setState({recipesAdded: recipeCount+1}, (event) => {
            if (e.target.id == "recipe_name") {
                let name = this.state.recipes[recipeCount].name;
                this.setState({name: e.target.value});
            } else {
                let ingridients = this.state.recipes[recipeCount].ingridients;
                this.setState({ingridients: e.target.value.split(",")});
            }
        })

        // if (e.target.id == "recipe_name") {
        //     let name = this.state.recipes[recipeCount].name;
        //     this.setState({name: e.target.value});
        // } else {
        //     let ingridients = this.state.recipes[recipeCount].ingridients;
        //     this.setState({ingridients: e.target.value.split(",")});
        // }

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

        if (this.state.recipeSubmitted) {
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
        else {
            return (
                <div>
                    <div className="background">
                    </div>
                    <Modal recipe={recipe} onRecipeSubmit={this.handleRecipeSubmit}
                                        onRecipeChange={this.handleRecipeChange}/>

                </div>
            );
        }

    };
}

export default RecipeBox;

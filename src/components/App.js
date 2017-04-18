import React from "react";
import Accordion from "./Accordion";
import Modal from "./Modal";

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {
                name: "",
                ingridients: [],
            },
            recipeSubmitted: false,
        };

        this.handleRecipeChange = this.handleRecipeChange.bind(this);
        this.handleRecipeSubmit = this.handleRecipeSubmit.bind(this);
    }

    handleRecipeChange(e) {
        const name = this.state.recipe.name,
              ingridients = this.state.recipe.ingridients;
        if (e.target.id == "recipe_name") {
            this.setState({name: e.target.value});
        } else {
            this.setState({ingridients: e.target.value.split(",")});
        }

    }

    handleRecipeSubmit(e) {
        const submitted = this.state.recipeSubmitted;
        this.setState({recipeSubmitted: true});
    }

    createRecipe() {
        const name = this.state.recipe.name,
              ingridients = this.state.recipe.ingridients;
              console.log(this.state.recipe.name)
              console.warn(this.state.recipe.ingridients)

        return (
            <Accordion recipeName={name}
                       recipeIngredients={ingridients}
                       key={name}/>
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
                                        onRecipeChange={this.handleRecipeChange}/>

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
